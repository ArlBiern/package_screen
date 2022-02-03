const componentSwitch = (stagesInfo, stage) => {
  switch (stage) {
    case "welcome":
      stagesInfo.welcome.display = true;
      stagesInfo.inputData.display = false;
      stagesInfo.finalization.display = false;
      break;
    case "inputData":
      stagesInfo.welcome.display = false;
      stagesInfo.inputData.display = true;
      stagesInfo.finalization.display = false;
      break;
    case "finalization":
      stagesInfo.welcome.display = false;
      stagesInfo.inputData.display = true;
      stagesInfo.finalization.display = true;
      break;
    default:
      stagesInfo.welcome.display = true;
      stagesInfo.inputData.display = false;
      stagesInfo.finalization.display = false;
  }
  return stagesInfo;
};

export default componentSwitch;
