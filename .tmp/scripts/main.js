'use strict';(function () {
  'use strict';
  // Your custom JavaScript goes here

  /**
   * navbar
   */
  $('.ui.navbar .search-icon > i').
  click(function () {
    var icon = $(this);
    if (icon.text() === 'search') {
      icon.text('close').parents('.content').addClass('searching');
    } else {
      icon.text('search').parents('.content').removeClass('searching');
    }
  });

  /**
       * hero
       */
  $('.ui.hero video.image').
  visibility({
    once: false,
    continuous: true,
    onPassing: function onPassing(calculations) {
      if (calculations.percentagePassed >= 0.3) {
        $(this).get(0).pause();
      } else {
        $(this).get(0).play();
      }
    } });


  /**
           * sidebar
           */
  $('.ui.sidebar').
  sidebar('setting', 'dimPage', false).
  sidebar('attach events', '.ui.navbar .menu-icon').
  sidebar('attach events', '.ui.sidebar .close-icon');

  $('.ui.navbar .menu').
  clone().
  appendTo('.ui.sidebar');

  /**
                            * slick carousel
                            */
  $('.ui.hero.carousel').
  slick({
    // arrows: false,
    prevArrow: '<button class="ui prev bottom button"><i class="material-icons">chevron_left</i></button>',
    nextArrow: '<button class="ui next bottom button"><i class="material-icons">chevron_right</i></button>',

    responsive: [
    {
      breakpoint: 767,
      settings: {
        dots: true } }] });





  $('.ui.vertical.story .ui.carousel.for').
  slick({
    asNavFor: '.ui.vertical.story .ui.carousel.nav',
    arrows: false,
    slidesToShow: 1 });


  $('.ui.vertical.story .ui.carousel.nav').
  slick({
    asNavFor: '.ui.vertical.story .ui.carousel.for',
    slidesToShow: 3,
    dots: true,
    prevArrow: '<button class="ui prev button"><i class="material-icons">chevron_left</i></button>',
    nextArrow: '<button class="ui next button"><i class="material-icons">chevron_right</i></button>',
    centerMode: true,
    responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1 } }] });





  /**
                                  * bottom
                                  */
  enquire.register("screen and (max-width: 767px)", {
    match: function match() {
      $('.ui.bottom').
      addClass('accordion').
      accordion({
        selector: {
          title: '.header',
          trigger: '.header',
          content: '.content' } });


    },
    unmatch: function unmatch() {
      $('.ui.bottom').
      removeClass('accordion');
    } });


})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImNsaWNrIiwiaWNvbiIsInRleHQiLCJwYXJlbnRzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInZpc2liaWxpdHkiLCJvbmNlIiwiY29udGludW91cyIsIm9uUGFzc2luZyIsImNhbGN1bGF0aW9ucyIsInBlcmNlbnRhZ2VQYXNzZWQiLCJnZXQiLCJwYXVzZSIsInBsYXkiLCJzaWRlYmFyIiwiY2xvbmUiLCJhcHBlbmRUbyIsInNsaWNrIiwicHJldkFycm93IiwibmV4dEFycm93IiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsImRvdHMiLCJhc05hdkZvciIsImFycm93cyIsInNsaWRlc1RvU2hvdyIsImNlbnRlck1vZGUiLCJlbnF1aXJlIiwicmVnaXN0ZXIiLCJtYXRjaCIsImFjY29yZGlvbiIsInNlbGVjdG9yIiwidGl0bGUiLCJ0cmlnZ2VyIiwiY29udGVudCIsInVubWF0Y2giXSwibWFwcGluZ3MiOiJhQUFBLENBQUMsWUFBVztBQUNWO0FBQ0E7O0FBRUE7OztBQUdBQSxJQUFFLDZCQUFGO0FBQ0dDLE9BREgsQ0FDUyxZQUFZO0FBQ2pCLFFBQUlDLE9BQU9GLEVBQUUsSUFBRixDQUFYO0FBQ0EsUUFBSUUsS0FBS0MsSUFBTCxPQUFnQixRQUFwQixFQUE4QjtBQUM1QkQsV0FBS0MsSUFBTCxDQUFVLE9BQVYsRUFBbUJDLE9BQW5CLENBQTJCLFVBQTNCLEVBQXVDQyxRQUF2QyxDQUFnRCxXQUFoRDtBQUNELEtBRkQsTUFFTztBQUNMSCxXQUFLQyxJQUFMLENBQVUsUUFBVixFQUFvQkMsT0FBcEIsQ0FBNEIsVUFBNUIsRUFBd0NFLFdBQXhDLENBQW9ELFdBQXBEO0FBQ0Q7QUFDRixHQVJIOztBQVVBOzs7QUFHQU4sSUFBRSxzQkFBRjtBQUNHTyxZQURILENBQ2M7QUFDVkMsVUFBTSxLQURJO0FBRVZDLGdCQUFZLElBRkY7QUFHVkMsYUFIVSxxQkFHQUMsWUFIQSxFQUdjO0FBQ3RCLFVBQUlBLGFBQWFDLGdCQUFiLElBQWlDLEdBQXJDLEVBQTBDO0FBQ3hDWixVQUFFLElBQUYsRUFBUWEsR0FBUixDQUFZLENBQVosRUFBZUMsS0FBZjtBQUNELE9BRkQsTUFFTztBQUNMZCxVQUFFLElBQUYsRUFBUWEsR0FBUixDQUFZLENBQVosRUFBZUUsSUFBZjtBQUNEO0FBQ0YsS0FUUyxFQURkOzs7QUFhQTs7O0FBR0FmLElBQUUsYUFBRjtBQUNHZ0IsU0FESCxDQUNXLFNBRFgsRUFDc0IsU0FEdEIsRUFDaUMsS0FEakM7QUFFR0EsU0FGSCxDQUVXLGVBRlgsRUFFNEIsdUJBRjVCO0FBR0dBLFNBSEgsQ0FHVyxlQUhYLEVBRzRCLHlCQUg1Qjs7QUFLQWhCLElBQUUsa0JBQUY7QUFDR2lCLE9BREg7QUFFR0MsVUFGSCxDQUVZLGFBRlo7O0FBSUE7OztBQUdBbEIsSUFBRSxtQkFBRjtBQUNHbUIsT0FESCxDQUNTO0FBQ0w7QUFDQUMsZUFBVywyRkFGTjtBQUdMQyxlQUFXLDRGQUhOOztBQUtMQyxnQkFBWTtBQUNWO0FBQ0VDLGtCQUFZLEdBRGQ7QUFFRUMsZ0JBQVU7QUFDUkMsY0FBTSxJQURFLEVBRlosRUFEVSxDQUxQLEVBRFQ7Ozs7OztBQWdCQXpCLElBQUUscUNBQUY7QUFDR21CLE9BREgsQ0FDUztBQUNMTyxjQUFVLHFDQURMO0FBRUxDLFlBQVEsS0FGSDtBQUdMQyxrQkFBYyxDQUhULEVBRFQ7OztBQU9BNUIsSUFBRSxxQ0FBRjtBQUNHbUIsT0FESCxDQUNTO0FBQ0xPLGNBQVUscUNBREw7QUFFTEUsa0JBQWMsQ0FGVDtBQUdMSCxVQUFNLElBSEQ7QUFJTEwsZUFBVyxvRkFKTjtBQUtMQyxlQUFXLHFGQUxOO0FBTUxRLGdCQUFZLElBTlA7QUFPTFAsZ0JBQVk7QUFDVjtBQUNFQyxrQkFBWSxHQURkO0FBRUVDLGdCQUFVO0FBQ1JJLHNCQUFjLENBRE4sRUFGWixFQURVLENBUFAsRUFEVDs7Ozs7O0FBa0JBOzs7QUFHQUUsVUFBUUMsUUFBUixDQUFpQiwrQkFBakIsRUFBa0Q7QUFDaERDLFNBRGdELG1CQUN4QztBQUNOaEMsUUFBRSxZQUFGO0FBQ0dLLGNBREgsQ0FDWSxXQURaO0FBRUc0QixlQUZILENBRWE7QUFDVEMsa0JBQVU7QUFDUkMsaUJBQU8sU0FEQztBQUVSQyxtQkFBUyxTQUZEO0FBR1JDLG1CQUFTLFVBSEQsRUFERCxFQUZiOzs7QUFTRCxLQVgrQztBQVloREMsV0FaZ0QscUJBWXRDO0FBQ1J0QyxRQUFFLFlBQUY7QUFDR00saUJBREgsQ0FDZSxXQURmO0FBRUQsS0FmK0MsRUFBbEQ7OztBQWtCRCxDQTlHRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG4gIC8vIFlvdXIgY3VzdG9tIEphdmFTY3JpcHQgZ29lcyBoZXJlXG5cbiAgLyoqXG4gICAqIG5hdmJhclxuICAgKi9cbiAgJCgnLnVpLm5hdmJhciAuc2VhcmNoLWljb24gPiBpJylcbiAgICAuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGljb24gPSAkKHRoaXMpXG4gICAgICBpZiAoaWNvbi50ZXh0KCkgPT09ICdzZWFyY2gnKSB7XG4gICAgICAgIGljb24udGV4dCgnY2xvc2UnKS5wYXJlbnRzKCcuY29udGVudCcpLmFkZENsYXNzKCdzZWFyY2hpbmcnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWNvbi50ZXh0KCdzZWFyY2gnKS5wYXJlbnRzKCcuY29udGVudCcpLnJlbW92ZUNsYXNzKCdzZWFyY2hpbmcnKVxuICAgICAgfVxuICAgIH0pXG5cbiAgLyoqXG4gICAqIGhlcm9cbiAgICovXG4gICQoJy51aS5oZXJvIHZpZGVvLmltYWdlJylcbiAgICAudmlzaWJpbGl0eSh7XG4gICAgICBvbmNlOiBmYWxzZSxcbiAgICAgIGNvbnRpbnVvdXM6IHRydWUsXG4gICAgICBvblBhc3NpbmcoY2FsY3VsYXRpb25zKSB7XG4gICAgICAgIGlmIChjYWxjdWxhdGlvbnMucGVyY2VudGFnZVBhc3NlZCA+PSAwLjMpIHtcbiAgICAgICAgICAkKHRoaXMpLmdldCgwKS5wYXVzZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJCh0aGlzKS5nZXQoMCkucGxheSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gIC8qKlxuICAgKiBzaWRlYmFyXG4gICAqL1xuICAkKCcudWkuc2lkZWJhcicpXG4gICAgLnNpZGViYXIoJ3NldHRpbmcnLCAnZGltUGFnZScsIGZhbHNlKVxuICAgIC5zaWRlYmFyKCdhdHRhY2ggZXZlbnRzJywgJy51aS5uYXZiYXIgLm1lbnUtaWNvbicpXG4gICAgLnNpZGViYXIoJ2F0dGFjaCBldmVudHMnLCAnLnVpLnNpZGViYXIgLmNsb3NlLWljb24nKVxuXG4gICQoJy51aS5uYXZiYXIgLm1lbnUnKVxuICAgIC5jbG9uZSgpXG4gICAgLmFwcGVuZFRvKCcudWkuc2lkZWJhcicpXG5cbiAgLyoqXG4gICAqIHNsaWNrIGNhcm91c2VsXG4gICAqL1xuICAkKCcudWkuaGVyby5jYXJvdXNlbCcpXG4gICAgLnNsaWNrKHtcbiAgICAgIC8vIGFycm93czogZmFsc2UsXG4gICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwidWkgcHJldiBib3R0b20gYnV0dG9uXCI+PGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmNoZXZyb25fbGVmdDwvaT48L2J1dHRvbj4nLFxuICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInVpIG5leHQgYm90dG9tIGJ1dHRvblwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5jaGV2cm9uX3JpZ2h0PC9pPjwvYnV0dG9uPicsXG5cbiAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgZG90czogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pXG5cbiAgJCgnLnVpLnZlcnRpY2FsLnN0b3J5IC51aS5jYXJvdXNlbC5mb3InKVxuICAgIC5zbGljayh7XG4gICAgICBhc05hdkZvcjogJy51aS52ZXJ0aWNhbC5zdG9yeSAudWkuY2Fyb3VzZWwubmF2JyxcbiAgICAgIGFycm93czogZmFsc2UsXG4gICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgfSlcblxuICAkKCcudWkudmVydGljYWwuc3RvcnkgLnVpLmNhcm91c2VsLm5hdicpXG4gICAgLnNsaWNrKHtcbiAgICAgIGFzTmF2Rm9yOiAnLnVpLnZlcnRpY2FsLnN0b3J5IC51aS5jYXJvdXNlbC5mb3InLFxuICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgZG90czogdHJ1ZSxcbiAgICAgIHByZXZBcnJvdzogJzxidXR0b24gY2xhc3M9XCJ1aSBwcmV2IGJ1dHRvblwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5jaGV2cm9uX2xlZnQ8L2k+PC9idXR0b24+JyxcbiAgICAgIG5leHRBcnJvdzogJzxidXR0b24gY2xhc3M9XCJ1aSBuZXh0IGJ1dHRvblwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5jaGV2cm9uX3JpZ2h0PC9pPjwvYnV0dG9uPicsXG4gICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgfSlcblxuICAvKipcbiAgICogYm90dG9tXG4gICAqL1xuICBlbnF1aXJlLnJlZ2lzdGVyKFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweClcIiwge1xuICAgIG1hdGNoKCkge1xuICAgICAgJCgnLnVpLmJvdHRvbScpXG4gICAgICAgIC5hZGRDbGFzcygnYWNjb3JkaW9uJylcbiAgICAgICAgLmFjY29yZGlvbih7XG4gICAgICAgICAgc2VsZWN0b3I6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnLmhlYWRlcicsXG4gICAgICAgICAgICB0cmlnZ2VyOiAnLmhlYWRlcicsXG4gICAgICAgICAgICBjb250ZW50OiAnLmNvbnRlbnQnXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgdW5tYXRjaCgpIHtcbiAgICAgICQoJy51aS5ib3R0b20nKVxuICAgICAgICAucmVtb3ZlQ2xhc3MoJ2FjY29yZGlvbicpXG4gICAgfVxuICB9KVxuXG59KSgpO1xuIl19
