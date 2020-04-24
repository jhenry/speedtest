const tt = {
  /**
   * Show tooltips for clipboardjs.
   * @param btn jQuery/Dom object for the link.
   * @param message Text to display
   */
  setTooltip: function (btn, message) {
    $(btn).tooltip('hide')
      .attr('data-original-title', message)
      .tooltip('show')
  },

  /**
   * Hide tooltips for clipboardjs.
   * @param btn jQuery/Dom object for the link.
   */
  hideTooltip: function (btn) {
    setTimeout(function () {
      $(btn).tooltip('hide')
    }, 1000)
  }
}

// ClipboardJS
var clipboard = new ClipboardJS('.btn')

clipboard.on('success', function (e) {
  tt.setTooltip(e.trigger, 'Copied!')
  tt.hideTooltip(e.trigger)
})

clipboard.on('error', function (e) {
  tt.setTooltip(e.trigger, 'Copy Failed!')
  tt.hideTooltip(e.trigger)
})

$('.btn').tooltip({
  trigger: 'click',
  placement: 'bottom'
})