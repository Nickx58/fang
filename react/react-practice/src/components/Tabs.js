import React, { createContext, useContext, useState } from "react";

const TabContext = createContext();

export const Tabs = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <TabContext.Provider value={{ selectedTab, setSelectedTab }}>
      {children}
    </TabContext.Provider>
  );
};

export const TabLists = ({ children }) => {
  const { selectedTab, setSelectedTab } = useContext(TabContext);

  return (
    <div style={{ display: "flex" }}>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          isSelected: index === selectedTab,
          onClick: () => setSelectedTab(index),
        });
      })}
    </div>
  );
};

export const TabItem = ({ isSelected, onClick, children }) => {
  return (
    <button
      style={{
        background: isSelected ? "#ddd" : "transparent",
        border: "none",
        padding: "10px",
        cursor: "pointer",
        marginRight: "5px",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const TabPanels = ({ children }) => {
  const { selectedTab } = useContext(TabContext);
  return (
    <div>
      {React.Children.map(children, (child, index) => {
        return selectedTab === index ? child : null;
      })}
    </div>
  );
};

export const TabPanelContent = ({ children }) => {
  return <div>{children}</div>;
};
