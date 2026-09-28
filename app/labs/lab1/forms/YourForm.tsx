export default function YourForm() {
  return (
    <form id="wd-your-form">
      <h4>Student Profile</h4>

      <h5>Name and login</h5>
      <label htmlFor="wd-your-first-name">First name: </label>
      <input id="wd-your-first-name" type="text" defaultValue="Harsh" />
      <br />
      <label htmlFor="wd-your-last-name">Last name: </label>
      <input id="wd-your-last-name" type="text" defaultValue="Dalal" />
      <br />
      <label htmlFor="wd-your-password">Password: </label>
      <input id="wd-your-password" type="password" placeholder="password" />
      <br />

      <h5>Why I am taking this course</h5>
      <label htmlFor="wd-your-bio">Short bio: </label>
      <br />
      <textarea
        id="wd-your-bio"
        cols={40}
        rows={6}
        defaultValue="I am a combined BS and MS student at Northeastern, heading toward cloud and AI security work. I have spent more time taking web apps apart than building them, and I want to close that gap. Building Kambaz end to end is the part of this course I am looking forward to most."
      />
      <br />

      <h5>Class standing</h5>
      <input type="radio" name="standing" id="wd-your-freshman" />
      <label htmlFor="wd-your-freshman">Freshman</label>
      <br />
      <input type="radio" name="standing" id="wd-your-sophomore" />
      <label htmlFor="wd-your-sophomore">Sophomore</label>
      <br />
      <input type="radio" name="standing" id="wd-your-junior" defaultChecked />
      <label htmlFor="wd-your-junior">Junior</label>
      <br />
      <input type="radio" name="standing" id="wd-your-senior" />
      <label htmlFor="wd-your-senior">Senior</label>
      <br />
      <input type="radio" name="standing" id="wd-your-graduate" />
      <label htmlFor="wd-your-graduate">Graduate</label>
      <br />

      <h5>Where I live</h5>
      <input type="radio" name="housing" id="wd-your-on-campus" />
      <label htmlFor="wd-your-on-campus">On campus</label>
      <br />
      <input type="radio" name="housing" id="wd-your-commuter" defaultChecked />
      <label htmlFor="wd-your-commuter">Commuter</label>
      <br />

      <h5>Interests</h5>
      <input type="checkbox" name="interests" id="wd-your-cloud" defaultChecked />
      <label htmlFor="wd-your-cloud">Cloud security</label>
      <br />
      <input type="checkbox" name="interests" id="wd-your-appsec" defaultChecked />
      <label htmlFor="wd-your-appsec">Application security</label>
      <br />
      <input type="checkbox" name="interests" id="wd-your-fullstack" />
      <label htmlFor="wd-your-fullstack">Full stack development</label>
      <br />
      <input type="checkbox" name="interests" id="wd-your-devops" />
      <label htmlFor="wd-your-devops">DevOps and automation</label>
      <br />

      <h5>Program</h5>
      <label htmlFor="wd-your-major">Major: </label>
      <br />
      <select id="wd-your-major" defaultValue="CYBER">
        <option value="CS">Computer Science</option>
        <option value="CYBER">Cybersecurity</option>
        <option value="DS">Data Science</option>
        <option value="IS">Information Systems</option>
      </select>
      <br />
      <label htmlFor="wd-your-topics">Topics I want to go deeper on: </label>
      <br />
      <select multiple id="wd-your-topics" defaultValue={["REACT", "SECURITY"]}>
        <option value="REACT">React and Next.js</option>
        <option value="NODE">Node and Express</option>
        <option value="MONGO">MongoDB</option>
        <option value="SECURITY">Web application security</option>
        <option value="CLOUD">Cloud architecture</option>
      </select>
      <br />

      <h5>Details</h5>
      <label htmlFor="wd-your-email">School email: </label>
      <input
        id="wd-your-email"
        type="email"
        defaultValue="dalal.hars@northeastern.edu"
      />
      <br />
      <label htmlFor="wd-your-grad-year">Expected graduation year: </label>
      <input
        id="wd-your-grad-year"
        type="number"
        defaultValue="2028"
        min={2024}
        max={2035}
      />
      <br />
      <label htmlFor="wd-your-start-date">Program start date: </label>
      <input id="wd-your-start-date" type="date" defaultValue="2023-09-05" />
      <br />
      <label htmlFor="wd-your-excitement">
        How excited I am about this course (0 to 10):{" "}
      </label>
      <input
        id="wd-your-excitement"
        type="range"
        min="0"
        max="10"
        defaultValue="9"
      />
      <br />
      <br />

      <button id="wd-your-save" type="submit">
        Save
      </button>
      <button id="wd-your-cancel" type="button">
        Cancel
      </button>
    </form>
  );
}
