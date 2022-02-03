const loader = () => {
  let htmlContent = `
      <div class="loader_cnt">
        <h4 class="info_heading">Daj nam chwilę, przetwarzamy dane...</h4>
        <div class="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    `;

  return htmlContent;
};

export default loader;
