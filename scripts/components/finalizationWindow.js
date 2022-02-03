const finalizationWindow = () => {
  let htmlContent = `
  <div class="modal">
    <div class="modal_cnt">
      <h4 class="info_heading">Paczka odebrana!</h4>
      <p class="info_paragraph" data-time="time">Zrobiłeś to w czasie: </p>
      <p class="info_paragraph">Czy możemy coś jeszcze dla Ciebie zrobić?</p>
      <div class="finalButton_cnt">
        <button class="button" data-stage="finnish">To wszystko na dziś</button>
        <button class="button" data-stage="nextPackage">Odbierz kolejną paczkę</button>
      </div>
    </div>
  </div>
    `;

  return htmlContent;
};

export default finalizationWindow;
