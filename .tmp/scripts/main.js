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
       * sidebar
       */
  $('.ui.sidebar').
  sidebar('setting', 'dimPage', false).
  sidebar('attach events', '.ui.navbar .menu-icon').
  sidebar('attach events', '.ui.sidebar .close-icon');

  $('.ui.navbar .menu').
  clone().
  appendTo('.ui.sidebar');
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImNsaWNrIiwiaWNvbiIsInRleHQiLCJwYXJlbnRzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInNpZGViYXIiLCJjbG9uZSIsImFwcGVuZFRvIl0sIm1hcHBpbmdzIjoiYUFBQSxDQUFDLFlBQVc7QUFDVjtBQUNBOztBQUVBOzs7QUFHQ0EsSUFBRSw2QkFBRjtBQUNFQyxPQURGLENBQ1EsWUFBVTtBQUNmLFFBQUlDLE9BQU9GLEVBQUUsSUFBRixDQUFYO0FBQ0EsUUFBSUUsS0FBS0MsSUFBTCxPQUFnQixRQUFwQixFQUE2QjtBQUMzQkQsV0FBS0MsSUFBTCxDQUFVLE9BQVYsRUFBbUJDLE9BQW5CLENBQTJCLFVBQTNCLEVBQXVDQyxRQUF2QyxDQUFnRCxXQUFoRDtBQUNELEtBRkQsTUFFSztBQUNISCxXQUFLQyxJQUFMLENBQVUsUUFBVixFQUFvQkMsT0FBcEIsQ0FBNEIsVUFBNUIsRUFBd0NFLFdBQXhDLENBQW9ELFdBQXBEO0FBQ0Q7QUFDRixHQVJGOztBQVVDOzs7QUFHQU4sSUFBRSxhQUFGO0FBQ0dPLFNBREgsQ0FDVyxTQURYLEVBQ3FCLFNBRHJCLEVBQytCLEtBRC9CO0FBRUdBLFNBRkgsQ0FFVyxlQUZYLEVBRTRCLHVCQUY1QjtBQUdHQSxTQUhILENBR1csZUFIWCxFQUc0Qix5QkFINUI7O0FBS0FQLElBQUUsa0JBQUY7QUFDQ1EsT0FERDtBQUVDQyxVQUZELENBRVUsYUFGVjtBQUdILENBNUJEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgLy8gWW91ciBjdXN0b20gSmF2YVNjcmlwdCBnb2VzIGhlcmVcblxuICAvKipcbiAgICogbmF2YmFyXG4gICAqL1xuICAgJCgnLnVpLm5hdmJhciAuc2VhcmNoLWljb24gPiBpJylcbiAgICAuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgIGxldCBpY29uID0gJCh0aGlzKVxuICAgICAgaWYgKGljb24udGV4dCgpID09PSAnc2VhcmNoJyl7XG4gICAgICAgIGljb24udGV4dCgnY2xvc2UnKS5wYXJlbnRzKCcuY29udGVudCcpLmFkZENsYXNzKCdzZWFyY2hpbmcnKVxuICAgICAgfWVsc2V7XG4gICAgICAgIGljb24udGV4dCgnc2VhcmNoJykucGFyZW50cygnLmNvbnRlbnQnKS5yZW1vdmVDbGFzcygnc2VhcmNoaW5nJylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogc2lkZWJhclxuICAgICAqL1xuICAgICQoJy51aS5zaWRlYmFyJylcbiAgICAgIC5zaWRlYmFyKCdzZXR0aW5nJywnZGltUGFnZScsZmFsc2UpXG4gICAgICAuc2lkZWJhcignYXR0YWNoIGV2ZW50cycsICcudWkubmF2YmFyIC5tZW51LWljb24nKVxuICAgICAgLnNpZGViYXIoJ2F0dGFjaCBldmVudHMnLCAnLnVpLnNpZGViYXIgLmNsb3NlLWljb24nKVxuXG4gICAgJCgnLnVpLm5hdmJhciAubWVudScpXG4gICAgLmNsb25lKClcbiAgICAuYXBwZW5kVG8oJy51aS5zaWRlYmFyJylcbn0pKCk7XG4iXX0=
