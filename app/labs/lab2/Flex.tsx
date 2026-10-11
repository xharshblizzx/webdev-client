export default function Flex() {
  return (
    <div id="wd-css-flex">
      <h2>Flex</h2>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-110px">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          Column 3
        </div>
      </div>
      <br />
      <div id="wd-ai-flex" className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-110px">Sample 1</div>
        <div className="wd-bg-color-gray">Sample 2</div>
        <div className="wd-bg-color-blue wd-fg-color-white wd-flex-grow-1">
          Sample 3 stretches
        </div>
      </div>
      <br />
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-green wd-fg-color-white wd-flex-grow-1">
          My first column stretches
        </div>
        <div className="wd-bg-color-gray">Middle</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-width-110px">
          Pinned
        </div>
      </div>
    </div>
  );
}
