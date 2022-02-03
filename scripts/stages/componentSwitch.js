const componentSwitch = (stagesInfo, stage) => {
  switch (stage) {
    case "welcome":
      stagesInfo.welcome.display = true;
      stagesInfo.inputData.display = false;
      stagesInfo.finalization.display = false;
      stagesInfo.loader.display = false;
      break;
    case "inputData":
      stagesInfo.welcome.display = false;
      stagesInfo.inputData.display = true;
      stagesInfo.finalization.display = false;
      stagesInfo.loader.display = false;
      break;
    case "finalization":
      stagesInfo.welcome.display = false;
      stagesInfo.inputData.display = true;
      stagesInfo.finalization.display = true;
      stagesInfo.loader.display = false;
      break;
    case "loader":
      stagesInfo.welcome.display = false;
      stagesInfo.inputData.display = false;
      stagesInfo.finalization.display = false;
      stagesInfo.loader.display = true;
      break;
    default:
      stagesInfo.welcome.display = true;
      stagesInfo.inputData.display = false;
      stagesInfo.finalization.display = false;
      stagesInfo.loader.display = false;
  }
  return stagesInfo;
};

export default componentSwitch;
