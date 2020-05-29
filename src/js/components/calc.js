var riding = $('.price__calc input[name=price__riding]');
var calc_riding_go = $('.price__calc #go');
var calc_riding_remote = $('.price__calc #remote');
var form_riding = $('.popup-calc input[name=riding]');

var calc_eplan = $('.price__calc input[name=price__eplan]');
var form_eplan = $('.popup-calc input[name=eplan]');

var calc_moscow = $('.price__calc input[name=price__moscow]');
var form_moscow = $('.popup-calc input[name=moscow]');

var calc_rooms = $('.price__calc input[name=price__rooms]');
var form_rooms = $('.popup-calc input[name=rooms]');

var form_price = $('.popup-calc input[name=price]');

var $totalBox = $('.price__total span');
var total = 0;

riding.on('change', calc_send_prepare);
calc_rooms.on('change', calc_send_prepare);
calc_eplan.on('change', calc_send_prepare);
calc_moscow.on('change', calc_send_prepare);
$totalBox.on('change', calc_send_prepare);

riding.on('change', calc_result);
calc_rooms.on('change', calc_result);

$('#popup-calc').on('click', function (e) {
  calc_send_prepare();

  $('.popup-calc').show();
  $('body').css('overflow', 'hidden');
});




//подсчет итоговой суммы
function calc_result(){

  var one = 0; //цена за одно помещение
  var ride = false;//выезд

  var num =  parseInt(calc_rooms.val());

  if (num >= 1 && num <= 2) {
    one = 2000;
  } else if (num > 2 && num <= 5) {
    one = 1800;
  } else if (num >= 6 && num <= 10) {
    one = 1650;
  } else if (num > 10) {
    one = 1500;
  }

  total = one * num;


  if (calc_riding_go.prop('checked') && (num == '1')){
    ride = true;
  }

  if (ride == true) {
    total += 2000
  }

  $totalBox.html(total);
}

//вывод на попап и отправка
function calc_send_prepare(){

  if (calc_moscow.prop('checked')) {
    form_moscow.val('Да');
  } else {
    form_moscow.val('Нет');
  }

  if (calc_eplan.prop('checked')) {
    form_eplan.val('Да');
  } else {
    form_eplan.val('Нет');
  }

  var rooms = calc_rooms.val();
  form_rooms.val(rooms);

  if (calc_riding_go.prop('checked')) {
    form_riding.val('Да');
  } else if (calc_riding_remote.prop('checked')) {
    form_riding.val('Нет');
  }

  form_price.val(total);
}

