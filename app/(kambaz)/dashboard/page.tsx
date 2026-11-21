"use client";
import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import * as client from "../courses/client";
import {
  emptyCourse,
  useCoursesStore,
  type Course,
} from "../store/coursesStore";
import { useAccountContext } from "../account/AccountContext";

export default function Dashboard() {
  const courses = useCoursesStore((state) => state.courses);
  const setCourses = useCoursesStore((state) => state.setCourses);
  const addCourse = useCoursesStore((state) => state.addCourse);
  const updateCourse = useCoursesStore((state) => state.updateCourse);
  const deleteCourse = useCoursesStore((state) => state.deleteCourse);
  const { currentUser } = useAccountContext();
  const [course, setCourse] = useState<Course>(emptyCourse);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [myCourseIds, setMyCourseIds] = useState<string[]>([]);

  const loadCourses = async () => {
    try {
      if (!currentUser) {
        setCourses(await client.fetchAllCourses());
        return;
      }
      const mine: Course[] = await client.findMyCourses();
      setMyCourseIds(mine.map((c) => c._id));
      setCourses(showAllCourses ? await client.fetchAllCourses() : mine);
    } catch {
      setCourses([]);
    }
  };
  useEffect(() => {
    loadCourses();
  }, [currentUser, showAllCourses]);

  const onAddCourse = async () => {
    const newCourse = await client.createCourse(course);
    addCourse(newCourse);
    setMyCourseIds([...myCourseIds, newCourse._id]);
  };
  const onUpdateCourse = async () => {
    const saved = await client.updateCourse(course);
    updateCourse(saved);
  };
  const onDeleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    deleteCourse(courseId);
  };
  const onToggleEnrollment = async (courseId: string) => {
    if (!currentUser) return;
    if (myCourseIds.includes(courseId)) {
      await client.unenrollFromCourse(currentUser._id, courseId);
    } else {
      await client.enrollIntoCourse(currentUser._id, courseId);
    }
    await loadCourses();
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title" className="flex items-center justify-between">
        Dashboard
        {currentUser && (
          <button
            type="button"
            className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
            id="wd-enrollments-toggle"
            onClick={() => setShowAllCourses(!showAllCourses)}
          >
            Enrollments
          </button>
        )}
      </h1>
      <hr />
      <h5 className="flex flex-wrap items-center gap-2">
        New Course
        <button
          type="button"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
          id="wd-add-new-course-click"
          onClick={onAddCourse}
        >
          Add
        </button>
        <button
          type="button"
          className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
          id="wd-update-course-click"
          onClick={onUpdateCourse}
        >
          Update
        </button>
      </h5>
      <input
        className="mb-2 mt-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.name}
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
        id="wd-course-name"
      />
      <textarea
        className="mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        rows={3}
        value={course.description}
        onChange={(e) =>
          setCourse({ ...course, description: e.target.value })
        }
        id="wd-course-description"
      />
      <div className="mb-3 flex max-w-xl flex-wrap gap-2">
        <input
          className="flex-1 rounded border border-neutral-300 px-3 py-1.5"
          value={course.number}
          onChange={(e) => setCourse({ ...course, number: e.target.value })}
          id="wd-course-number"
        />
        <input
          type="date"
          className="rounded border border-neutral-300 px-3 py-1.5"
          value={course.startDate}
          onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
          id="wd-course-start-date"
        />
      </div>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {courses.map((c) => (
          <CourseCard
            key={c._id}
            course={c}
            enrolled={myCourseIds.includes(c._id)}
            showEnroll={!!currentUser}
            onEdit={() => setCourse(c)}
            onDelete={() => onDeleteCourse(c._id)}
            onToggleEnrollment={() => onToggleEnrollment(c._id)}
          />
        ))}
      </div>
    </div>
  );
}
