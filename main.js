function get_ua() {
  var parser = new UAParser();
  const result = parser.getResult();

  $('#pasteBox').append(`Browser: ${result.browser.name} ${result.browser.version} (${result.engine.name})`)
  $('#pasteBox').append(`\nOS: ${result.os.name} ${result.os.version}`)
  $('#pasteBox').append(`\nUA: ${result.ua}`)
}

var s = new Speedtest();

s.setParameter("getIp_ispInfo_distance", "mi");

s.onupdate = function (data) { // when status is received, put the values in the appropriate fields
  $('#download').html(Math.trunc(data.dlStatus))
  $('#upload').html(Math.trunc(data.ulStatus))
  $('#ping').html(Math.trunc(data.pingStatus))
  $('#jitter').html(Math.trunc(data.jitterStatus))
  $('#ip').html(data.clientIp)
}

s.start(); // start the speedtest with default settings

s.onend = function (aborted) { //callback for test ended/aborted
  $('#upload').removeClass('text-muted')
  $('#download').removeClass('text-muted')

  $('#pasteBox').append(`Down: ${$('#download').html()} Mbps\n`)
  $('#pasteBox').append(`Up: ${$('#upload').html()} Mbps\n`)
  $('#pasteBox').append(`Ping: ${$('#ping').html()} ms\n`)
  $('#pasteBox').append(`Jitter: ${$('#jitter').html()} ms\n`)
  $('#pasteBox').append(`Ip: ${$('#ip').html()} \n`)

  get_ua()
}