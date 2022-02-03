import welcomeWindow from "./components/welcomeWindow.js";
import inputDataWindow from "./components/inputDataWindow.js";
import finalizationWindow from "./components/finalizationWindow.js";

const appCnt = document.querySelector(".app");

const stagesInfo = {
  welcome: {
    component: welcomeWindow(),
    modal: false,
    display: true,
  },
  inputData: {
    component: inputDataWindow(),
    modal: false,
    display: false,
  },
  finalization: {
    component: finalizationWindow(),
    modal: true,
    display: false,
  },
};

const renderContent = (container) => {
  for (let component in stagesInfo) {
    if (stagesInfo[component].display) {
      container.innerHTML = stagesInfo[component].component;
      const button = container.querySelector(".button");

      if (button.dataset.stage === "welcome") {
        button.addEventListener("click", () => {
          stagesInfo.welcome.display = false;
          stagesInfo.inputData.display = true;
          stagesInfo.finalization.display = false;
          renderContent(appCnt);
        });
      }
    }
  }
};

renderContent(appCnt);
