console.log('js');
$(document).ready(onReady);

function onReady() {
  console.log('So ready');

  const h1 = $('h1');
  console.log(h1);

  const h2 = $('h2');
  h2.css('background-color', 'blue');

  $('h2').addClass('froggy');

  const h1Text = $('h1').text();
  console.log('h1Text is', h1Text);

  const louderText = h1Text.toUpperCase() + '!!!';
  $('h1').text(louderText);
  $('#submitbutton').on('click', whenIRide);
}

function whenIRide() {
  console.log('clicked the button');
  let brand = $('#brand').val();
  console.log('brand is', brand);
  $('#Bikes').append(`
    <li>
      brand is: ${brand}
      <button class="deleteButton">Delete Me</button>
    </li>
  `);
}
function deleteMe() {
  let thisThing = $('this');
  console.log('what is this?!', thisThing);
  $('this').parent().remove();

}