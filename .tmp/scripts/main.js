'use strict';(function () {
  'use strict';
  // Your custom JavaScript goes here

  /**
   * navbar
   */
  $('.ui.navbar .search-icon > i')
    .click(function () {
    var icon = $(this);
    if (icon.text() === 'search') {
      icon.text('close').parents('.content').addClass('searching');
    } else {
      icon.text('search').parents('.content').removeClass('searching');
    }
  });

  /**
   * sidebar
   */
  $('.ui.sidebar')
    .sidebar('attach events', '.ui.navbar .menu-icon')

})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImNsaWNrIiwiaWNvbiIsInRleHQiLCJwYXJlbnRzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyJdLCJtYXBwaW5ncyI6ImFBQUEsQ0FBQyxZQUFXO0FBQ1Y7QUFDQTs7QUFFQTs7O0FBR0NBLElBQUUsNkJBQUY7QUFDRUMsT0FERixDQUNRLFlBQVU7QUFDZixRQUFJQyxPQUFPRixFQUFFLElBQUYsQ0FBWDtBQUNBLFFBQUlFLEtBQUtDLElBQUwsT0FBZ0IsUUFBcEIsRUFBNkI7QUFDM0JELFdBQUtDLElBQUwsQ0FBVSxPQUFWLEVBQW1CQyxPQUFuQixDQUEyQixVQUEzQixFQUF1Q0MsUUFBdkMsQ0FBZ0QsV0FBaEQ7QUFDRCxLQUZELE1BRUs7QUFDSEgsV0FBS0MsSUFBTCxDQUFVLFFBQVYsRUFBb0JDLE9BQXBCLENBQTRCLFVBQTVCLEVBQXdDRSxXQUF4QyxDQUFvRCxXQUFwRDtBQUNEO0FBQ0YsR0FSRjs7Ozs7QUFhRixDQXBCRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG4gIC8vIFlvdXIgY3VzdG9tIEphdmFTY3JpcHQgZ29lcyBoZXJlXG5cbiAgLyoqXG4gICAqIG5hdmJhclxuICAgKi9cbiAgICQoJy51aS5uYXZiYXIgLnNlYXJjaC1pY29uID4gaScpXG4gICAgLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICBsZXQgaWNvbiA9ICQodGhpcylcbiAgICAgIGlmIChpY29uLnRleHQoKSA9PT0gJ3NlYXJjaCcpe1xuICAgICAgICBpY29uLnRleHQoJ2Nsb3NlJykucGFyZW50cygnLmNvbnRlbnQnKS5hZGRDbGFzcygnc2VhcmNoaW5nJylcbiAgICAgIH1lbHNle1xuICAgICAgICBpY29uLnRleHQoJ3NlYXJjaCcpLnBhcmVudHMoJy5jb250ZW50JykucmVtb3ZlQ2xhc3MoJ3NlYXJjaGluZycpXG4gICAgICB9XG4gICAgfSlcblxuXG5cblxufSkoKTtcbiJdfQ==
