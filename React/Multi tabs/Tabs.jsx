import { useState } from "react";

export default function Tabs({ tabsContent, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleOnClick(currentIndex) {
    setCurrentTabIndex(currentIndex);
    if (onChange) {
      onChange(currentIndex);
    }
  }

  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabItem, index) => (
          <div
            key={tabItem.label}
            className={`tab-item ${currentTabIndex === index ? "active" : ""}`}
            onClick={() => handleOnClick(index)}
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>

      <div className="content" style={{ color: "red" }}>
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
}
