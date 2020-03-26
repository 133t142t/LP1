$(function(){
    $('.js-menu__item__link').each(function(){
        $(this).on('click',function(){
          $(this).toggleClass('on');
            $("+.submenu",this).slideToggle();
            return false;
        });
    });

    window.onload = function() {
    var popup = document.getElementById('js-popup');
    if(!popup) return;
    popup.classList.add('is-show');

    var blackBg = document.getElementById('js-black-bg');
    var closeBtn = document.getElementById('js-close-btn');

    closePopUp(blackBg);
    closePopUp(closeBtn);

    function closePopUp(elem) {
      if(!elem) return;
      elem.addEventListener('click', function() {
        popup.classList.remove('is-show');
      })
    }
  }
});
