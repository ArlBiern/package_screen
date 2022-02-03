const inputDataWindow = () => {
  let htmlContent = `
    <h4 class="info_heading">Proszę wprowadź numer telefonu oraz kod odbioru:</h4>
    <form action="#" class="form">
      <div class="input_cnt">
        <label for="phone" class="input_label">Numer telefonu</label>
        <input type="text" id="phone" name="phone" class="input_field">
        <p class="error_info"></p>
      </div>
      <div class="input_cnt">
        <label for="code" class="input_label">Kod odbioru</label>
        <input type="text" id="code" name="code" class="input_field">
        <p class="error_info"></p>
      </div>
    </form>
    <button class="button inputButton" data-stage="input">Odbierz paczkę</button>
  `;

  return htmlContent;
};

export default inputDataWindow;
