"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import { emptyUser, type User } from "../../../../account/AccountContext";
import * as client from "../../../client";
import * as accountClient from "../../../../account/client";

export default function PeopleTable() {
  const { cid } = useParams();
  const courseId = String(cid);
  const [enrolled, setEnrolled] = useState<User[]>([]);
  const [user, setUser] = useState<User>(emptyUser);
  const loadPeople = async () => {
    setEnrolled(await client.findUsersForCourse(courseId));
  };
  useEffect(() => {
    loadPeople();
  }, [courseId]);
  const addPerson = async () => {
    if (!user.firstName || !user.lastName) return;
    const newUser = await accountClient.createUser({
      ...user,
      username: `${user.firstName}.${user.lastName}`.toLowerCase(),
    });
    await client.enrollIntoCourse(newUser._id, courseId);
    setUser(emptyUser);
    await loadPeople();
  };
  const removePerson = async (userId: string) => {
    await client.unenrollFromCourse(userId, courseId);
    await loadPeople();
  };
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <input
          id="wd-people-first-name"
          placeholder="First name"
          value={user.firstName}
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          className="rounded border border-neutral-300 px-3 py-1.5 text-sm"
        />
        <input
          id="wd-people-last-name"
          placeholder="Last name"
          value={user.lastName}
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          className="rounded border border-neutral-300 px-3 py-1.5 text-sm"
        />
        <select
          id="wd-people-role"
          value={user.role}
          onChange={(e) => setUser({ ...user, role: e.target.value })}
          className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
        >
          <option value="STUDENT">Student</option>
          <option value="TA">TA</option>
          <option value="FACULTY">Faculty</option>
        </select>
        <button
          type="button"
          id="wd-add-people-click"
          onClick={addPerson}
          className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
        >
          + People
        </button>
      </div>
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
            <th className="p-2"></th>
          </tr>
        </thead>
        <tbody>
          {enrolled.map((user) => (
            <tr key={user._id} className="odd:bg-neutral-50">
              <td className="wd-full-name p-2 text-nowrap">
                <FaUserCircle className="me-2 inline align-middle text-4xl text-neutral-500" />
                <span className="wd-first-name">{user.firstName}</span>{" "}
                <span className="wd-last-name">{user.lastName}</span>
              </td>
              <td className="wd-login-id p-2">{user.loginId}</td>
              <td className="wd-section p-2">{user.section}</td>
              <td className="wd-role p-2">{user.role}</td>
              <td className="wd-last-activity p-2">{user.lastActivity}</td>
              <td className="wd-total-activity p-2">{user.totalActivity}</td>
              <td className="p-2">
                <button
                  type="button"
                  onClick={() => removePerson(user._id)}
                  className="rounded bg-red-600 px-2 py-0.5 text-xs text-white"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
