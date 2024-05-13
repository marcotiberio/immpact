import $ from 'jquery'

$(document).ready(function () {
  $('#showcontactFormWrapper').click(function () {
    $('#contactFormWrapper').toggle()
  })
  $('#hidecontactFormWrapper').click(function () {
    $('#contactFormWrapper').hide()
  })
})

$('.hamburger').on('click', function () {
  $('.menu').toggleClass('menuIsOpen')
})

$('.menu a').on('click', function () {
  $('.menu').removeClass('menuIsOpen')
})
