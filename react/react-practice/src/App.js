import {
  Tabs,
  TabLists,
  TabItem,
  TabPanels,
  TabPanelContent,
} from "./components/Tabs";

function App() {
  return (
    <div>
      <Tabs>
        <TabLists>
          <TabItem>tab 1</TabItem>
          <TabItem>tab 2</TabItem>
        </TabLists>
        <TabPanels>
          <TabPanelContent>Tab Content 1</TabPanelContent>
          <TabPanelContent>Tab Content 2</TabPanelContent>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default App;
