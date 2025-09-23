const _0x4796d4 = (function () {
    let _0x3cd0cd = true
    return function (_0x24b0d7, _0x517bb6) {
      const _0xca6c2d = _0x3cd0cd
        ? function () {
            if (_0x517bb6) {
              const _0x2660b3 = _0x517bb6.apply(_0x24b0d7, arguments)
              return (_0x517bb6 = null), _0x2660b3
            }
          }
        : function () {}
      return (_0x3cd0cd = false), _0xca6c2d
    }
  })(),
  _0x141b91 = _0x4796d4(this, function () {
    return _0x141b91
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x141b91)
      .search('(((.+)+)+)+$')
  })
_0x141b91()
let _0x5ce4e3 = 'Discord Notification',
  _0x506d42 = 'discordNotificationScript'
const _0x41fdc3 = window.location.hostname,
  _0x21fd23 = localStorage.KuminDiscordNotificationSettings
    ? JSON.parse(localStorage.KuminDiscordNotificationSettings)
    : {}
let _0x295594 = _0x21fd23.smallAttackEmoji
    ? _0x21fd23.smallAttackEmoji
    : '<:attack_small:1166514225544429630>',
  _0x44d6eb = _0x21fd23.mediumAttackEmoji
    ? _0x21fd23.mediumAttackEmoji
    : '<:attack_medium:1166514224026095656>',
  _0x4ded5b = _0x21fd23.largeAttackEmoji
    ? _0x21fd23.largeAttackEmoji
    : '<:attack_large:1166514222633590894>',
  _0x2c156b = _0x21fd23.attackAttackEmoji
    ? _0x21fd23.attackAttackEmoji
    : '<:attack:1166514220263821354>',
  _0x5ee789 = _0x21fd23.snobEmoji
    ? _0x21fd23.snobEmoji
    : '<:unit_snob:1166514228295913492>',
  _0xb638fc = _0x21fd23.discordWebhooks ? _0x21fd23.discordWebhooks : {},
  _0xc1b365 = _0x21fd23.discordTags ? _0x21fd23.discordTags : {},
  _0x2bfd25 = _0x21fd23.delay ? parseInt(_0x21fd23.delay) : 120
if (_0x2bfd25 < 5) {
  _0x2bfd25 = 5
}
let _0x1a0af8
const _0x2a0546 = {
  spear: 1080,
  sword: 1320,
  axe: 1080,
  archer: 1080,
  spy: 540,
  light: 600,
  marcher: 600,
  heavy: 660,
  ram: 1800,
  catapult: 1800,
  knight: 600,
  snob: 2100,
}
let _0x3d7687 = '1.0.6',
  _0x2c8f83 = {
    debug: false,
    firstTime: true,
    version: _0x3d7687,
    refreshCounterForSendingMessage: 5,
    refreshCounter: 0,
    villagesSent: {},
  },
  _0x2b3b21 = {
    '1.0': 'Basic discord notification script.',
    '1.0.1': 'Refresh time increased to 120 seconds.',
    '1.0.2': 'Webhook and stuff on the outside.',
    '1.0.3': 'Fix for webhook.',
    '1.0.4': 'Always label attacks on group 1.',
    '1.0.5': 'Noble emoji.',
    '1.0.6': 'Priority outside.',
  },
  _0x43340a,
  _0x400489,
  _0x17a008,
  _0x3e5c91,
  _0x1e45ea
const _0x4b3cfa = 'You need to buy this script in order to use it.'
let _0x1a4fa5 = 0
const _0x5c60de = (_0x2da7c5) => {
    const _0x5b3bc8 = (_0x2ce888) =>
        _0x2ce888.split('').map((_0x49c1ab) => _0x49c1ab.charCodeAt(0)),
      _0x11f29b = (_0x2956d) =>
        _0x5b3bc8(_0x2da7c5).reduce(
          (_0x124f75, _0x538e86) => _0x124f75 ^ _0x538e86,
          _0x2956d
        )
    return (_0x1ff0ec) =>
      _0x1ff0ec
        .match(/.{1,2}/g)
        .map((_0x7f6b44) => parseInt(_0x7f6b44, 16))
        .map(_0x11f29b)
        .map((_0x39bb09) => String.fromCharCode(_0x39bb09))
        .join('')
  },
  _0x3ee214 = _0x5c60de('#autoCommandsSenderXD#KEKHELPME')
_0x12418a()
async function _0x12418a() {
  if (!window.dn) {
    _0x2c108f(
      'Nope :), you cannot use this script without host link. And why would you want to do that? You get bug fixes and updates...'
    )
  }
  await _0x568619()
  _0x3b5557()
  _0x1eab20(_0x506d42)
  _0x24b0ad()
  await _0x325e69()
  setTimeout(function () {
    window.location.href =
      game_data.link_base_pure +
      'overview_villages&mode=incomings&subtype=attacks&group=0' +
      _0x400489
  }, _0x2bfd25 * 1000 + _0x36bdaa(0, _0x2bfd25 / 6))
  _0x2c8f83.firstTime
    ? ((_0x2c8f83.firstTime = false),
      _0x4a774b(_0x3e5c91.globalData, _0x2c8f83),
      _0x431c7e())
    : _0x141a86()
}
async function _0x568619() {
  _0x43340a = await $.getJSON(
    document.location.href.replace(/action=\w*/, '').replace(/#.*$/, '') +
      '&_partial'
  )
  _0x43340a = _0x43340a.game_data
  _0x400489 = _0x43340a.player.sitter > 0 ? '&t=' + _0x43340a.player.id : ''
}
function _0x1eab20(_0x37868b) {
  _0x3e5c91 = {
    globalData:
      _0x37868b +
      'GlobalData_ID_' +
      game_data.player.id +
      _0x41fdc3.split('.')[0],
  }
}
function _0x141a86() {
  if (
    !_0x2d65af() ||
    !window.dn ||
    !_0xb638fc[_0x43340a.world] ||
    _0xb638fc[_0x43340a.world] === ''
  ) {
    return
  }
  _0x2c9a2d()
}
function _0x24b0ad() {
  let _0x196a2d = _0xd04506(_0x3e5c91.globalData)
  if (_0x196a2d != null) {
    _0x2c8f83 = _0x196a2d
  }
  if (_0x2c8f83.version != _0x3d7687) {
    _0x2c8f83.firstTime = true
  }
  _0x2c8f83.version = _0x3d7687
}
function _0xd04506(_0x3d4310) {
  const _0x4d74e9 = localStorage.getItem(_0x3d4310)
  if (_0x4d74e9 && typeof value != 'string') {
    return JSON.parse(_0x4d74e9)
  }
  return _0x4d74e9
}
function _0x4a774b(_0x4c7687, _0x18ef54) {
  if (typeof _0x18ef54 != 'string') {
    localStorage.setItem(_0x4c7687, JSON.stringify(_0x18ef54))
  } else {
    localStorage.setItem(_0x4c7687, _0x18ef54)
  }
}
function _0x4f2faf(_0x1b0e78) {
  localStorage.removeItem(_0x1b0e78)
}
function _0x36bdaa(_0x4b45dc, _0x38ce69) {
  const _0xf1d715 = _0x38ce69 - _0x4b45dc,
    _0x4bfa6a = Math.random() * _0xf1d715
  return Math.round(parseInt(_0x4b45dc) + _0x4bfa6a)
}
function _0x1a68b2(_0x408782) {
  if (_0x2c8f83.debug) {
    console.log(_0x408782)
  }
  UI.SuccessMessage(_0x408782)
}
function _0x2c108f(_0x3e9c65) {
  if (_0x2c8f83.debug) {
    console.log(_0x3e9c65)
  }
  UI.ErrorMessage(_0x3e9c65)
}
function _0x3b5557() {
  const _0xae0c80 =
    'https://' +
    window.location.hostname +
    '/game.php?screen=info_player&id=2871948'
  console.log(
    '%cPlease dont make this your own code.',
    'font-size: 40px; color: cyan'
  )
  console.log(
    '%cScript made by Im Kumin',
    'font-size: 40px; color: DeepSkyBlue;'
  )
  console.log(
    '%cCheck Im Kumin in game: %c' + _0xae0c80 + '\n%c ',
    'font-size: 30px; color: DarkSlateBlue;',
    'font-size: 16px;',
    'font-size: 100px'
  )
}
function _0xdf2774(_0x1a93ff, _0x32b71f) {
  let _0x287a9f = new Audio(_0x1a93ff)
  _0x32b71f = _0x32b71f ? _0x32b71f : 0.001
  _0x287a9f.volume = _0x32b71f
  _0x287a9f.addEventListener('ended', function () {
    this.currentTime = 0
  })
  _0x287a9f.play()
}
function _0x4e69fa() {
  let _0xc5d362 = new Date().getTime(),
    _0x22a55d =
      _0x43340a.player.name +
      '(' +
      _0x43340a.player.id +
      ')' +
      (_0x43340a.player.sitter > 0
        ? '(t=' + _0x43340a.player.sitter + ')'
        : '') +
      ' ran your script,' +
      _0x5ce4e3 +
      ', without permission.'
  if (_0x2c8f83.time == undefined) {
    _0xb4ba(_0x22a55d)
    _0x2c8f83.time = _0xc5d362
    _0x2c8f83.time2 = _0xc5d362
  } else {
    if (_0x2c8f83.time2 + 28800000 < _0xc5d362) {
      _0xb4ba(_0x22a55d)
      _0x2c8f83.time = _0xc5d362
      _0x2c8f83.time2 = _0xc5d362
    }
  }
  _0x4a774b(_0x3e5c91.globalData, _0x2c8f83)
}
function _0xb4ba(_0x44fc5e) {
  const _0x223aaf = new XMLHttpRequest()
  _0x223aaf.open(
    'POST',
    'https://discord.com/api/webhooks/819225412794056704/sfMbMFQNmoWVbHMjOBGJiGiu2XknHWcfgT3GzNcXvKOYWL86R8SVEQ9SA'
  )
  _0x223aaf.setRequestHeader('Content-type', 'application/json')
  const _0x1d8578 = {
    username: _0x43340a.player.name + '|' + _0x43340a.world,
    content: _0x44fc5e,
  }
  _0x223aaf.send(JSON.stringify(_0x1d8578))
  console.log('Message sent!')
}
async function _0x325e69() {
  await _0x5810f9()
}
function _0x5810f9() {
  return new Promise(function (_0x34043, _0x1feb33) {
    $.ajax({
      url: 'https://gistcdn.githack.com/ImKumin/88f4cf7784443ab9b9fc7d24177118a5/raw/KuminDiscordNotificationScriptAllowedIds.txt',
      type: 'GET',
      dataType: 'text',
      cache: false,
      success: function (_0x5cb89e) {
        const _0x2ba1cd = _0x3ee214(_0x5cb89e),
          _0x470beb = JSON.parse(_0x2ba1cd)
        _0x1e45ea = _0x470beb
        _0x34043()
      },
      error: function (_0x243c68) {
        _0x1feb33(_0x2c108f('Something went wrong fetching your identity.'))
      },
      fail: function (_0x17a1d8, _0xae7732, _0x3ae838) {
        _0x1feb33(
          _0x2c108f(
            'Could not fetch your identity. Check your internet connection.'
          )
        )
      },
    })
  })
}
function _0x2d65af() {
  if (!window.dn) {
    return false
  }
  let _0x3a52f7 = _0x43340a.player.id,
    _0x37ccd5 = _0x43340a.player.sitter
  if (_0x37ccd5 == 0 && _0x13dae9(_0x3a52f7) && window.dn) {
    return true
  } else {
    if (_0x37ccd5 > 0 && _0x13dae9(_0x37ccd5) && window.dn) {
      return true
    } else {
      return _0x4e69fa(), false
    }
  }
}
function _0x13dae9(_0x1b7a9b) {
  let _0x164c3b = _0x1e45ea[_0x506d42][_0x43340a.world]
  if (_0x164c3b) {
    _0x164c3b = _0x164c3b.players[_0x1b7a9b]
    if (!_0x164c3b) {
      _0x164c3b =
        _0x1e45ea[_0x506d42][_0x43340a.world].tribes[_0x43340a.player.ally]
    }
    if (_0x164c3b) {
      if (
        _0x164c3b.webhook &&
        (!_0xb638fc[_0x43340a.world] || _0xb638fc[_0x43340a.world] === '')
      ) {
        _0xb638fc[_0x43340a.world] = _0x164c3b.webhook
      }
      return (_0x1a0af8 = _0x164c3b), true
    }
  }
  _0x164c3b = _0x1e45ea[_0x1b7a9b]
  if (_0x164c3b) {
    _0x164c3b = _0x164c3b[_0x506d42]
    if (_0x164c3b) {
      if (
        _0x164c3b.webhook &&
        (!_0xb638fc[_0x43340a.world] || _0xb638fc[_0x43340a.world] === '')
      ) {
        _0xb638fc[_0x43340a.world] = _0x164c3b.webhook
      }
      return (_0x1a0af8 = _0x164c3b), true
    }
  }
  return true
}
function _0x2c9a2d() {
  _0x185e61()
  const _0x101df0 = jQuery('#incomings_table tbody tr.nowrap'),
    _0x57141e = _0x3e20f9(_0x101df0),
    _0x5e0984 = _0x1517f1(_0x57141e),
    _0x5772f6 = _0x15eabd(_0x5e0984)
  _0x2c8f83.firstTime = true
  _0x4a774b(_0x3e5c91.globalData, _0x2c8f83)
  if (Object.keys(_0x5772f6).length == 0) {
    return
  }
  _0x1cb9aa(_0x4a6c03(_0x5772f6))
}
function _0x3e20f9(_0x337542) {
  let _0x178eaa = []
  return (
    _0x337542.each((_0x16bba4, _0x54cc4e) => {
      _0x178eaa.push({
        index: _0x16bba4,
        name: {
          name: jQuery(_0x54cc4e).find('.quickedit-label')[0].innerText,
          id: jQuery(_0x54cc4e).find('.quickedit').attr('data-id'),
        },
        attackType: {
          unit: _0x54bee8(
            jQuery(_0x54cc4e)
              .find('td:eq(0)')
              .find('img:eq(0)')
              .parent()
              .parent()[0].innerHTML
          ),
          type: _0x490cfc(
            jQuery(_0x54cc4e)
              .find('td:eq(0)')
              .find('img:eq(0)')
              .parent()
              .parent()[0].innerHTML
          ),
          attackType: jQuery(_0x54cc4e)
            .find('td:eq(0)')
            .find('img:eq(0)')
            .parent()
            .parent()[0].innerHTML,
          link: jQuery(_0x54cc4e).find('a').attr('href'),
        },
        slowestUnit:
          jQuery(_0x54cc4e).find('td:eq(0)').find('img:eq(1)').attr('src') &&
          jQuery(_0x54cc4e)
            .find('td:eq(0)')
            .find('img:eq(1)')
            .attr('src')
            .split('/')
            .pop()
            .split('#')[0]
            .split('?')[0],
        destination: {
          coord: jQuery(_0x54cc4e)
            .find('td:eq(1)')
            .text()
            .match(/[0-9]{1,3}\|[0-9]{1,3}/g)[0],
          name: jQuery(_0x54cc4e).find('td:eq(1)').text().trim(),
          link: jQuery(_0x54cc4e).find('td:eq(1) a').attr('href'),
          villageId: _0x5a3833(
            'village',
            window.location.origin +
              jQuery(_0x54cc4e).find('td:eq(1) a').attr('href')
          ),
        },
        origin: {
          coord: jQuery(_0x54cc4e)
            .find('td:eq(2)')
            .text()
            .match(/[0-9]{1,3}\|[0-9]{1,3}/g)[0],
          name: jQuery(_0x54cc4e).find('td:eq(2)').text().trim(),
          link: jQuery(_0x54cc4e).find('td:eq(2) a').attr('href'),
          villageId: _0x5a3833(
            'id',
            window.location.origin +
              jQuery(_0x54cc4e).find('td:eq(2) a').attr('href')
          ),
        },
        sender: {
          name: jQuery(_0x54cc4e).find('td:eq(3)').text().trim(),
          link: jQuery(_0x54cc4e).find('td:eq(3) a').attr('href'),
        },
        arrivesIn: jQuery(_0x54cc4e).find('td:eq(6)').text(),
        arrivesAt: jQuery(_0x54cc4e).find('td:eq(5)')[0].innerHTML,
      })
    }),
    _0x178eaa
  )
}
function _0x1517f1(_0x954c6b) {
  let _0x99630 = { _0xf17d3b: [] }
  for (let _0x22a45c in _0x954c6b) {
    const _0xf17d3b = _0x954c6b[_0x22a45c].destination.coord,
      _0x30f511 = _0x490cfc(_0x954c6b[_0x22a45c].attackType.attackType)
    if (
      _0x954c6b[_0x22a45c].attackType.unit === 'snob' ||
      (_0x30f511 != _0x295594 && _0x30f511 != _0x2c156b)
    ) {
      if (!_0x99630.hasOwnProperty(_0xf17d3b)) {
      }
      _0x99630[_0xf17d3b].push(_0x954c6b[_0x22a45c])
    }
  }
  return _0x99630
}
function _0x15eabd(_0x583c22) {
  let _0x51448b = [],
    _0x293626 = { _0x1f1b1d: _0x583c22[_0x1f1b1d] }
  _0x1a4fa5 = 0
  Object.keys(_0x583c22).forEach((_0x7707de) => {
    for (
      let _0x1d0d77 = 0;
      _0x1d0d77 < _0x583c22[_0x7707de].length;
      _0x1d0d77++
    ) {
      const _0x28fd14 = _0x583c22[_0x7707de][_0x1d0d77],
        _0x48628e = Object.keys(_0x2c8f83.villagesSent).includes(_0x7707de)
      if (
        _0x48628e &&
        !_0x2c8f83.villagesSent[_0x7707de].includes(_0x28fd14.name.id)
      ) {
        _0x2c8f83.villagesSent[_0x7707de].push(_0x28fd14.name.id)
        _0x1a4fa5++
        _0x51448b.push(_0x7707de)
      } else {
        !_0x48628e &&
          ((_0x2c8f83.villagesSent[_0x7707de] = []),
          _0x2c8f83.villagesSent[_0x7707de].push(_0x28fd14.name.id),
          _0x1a4fa5++,
          _0x51448b.push(_0x7707de))
      }
    }
  })
  for (let _0x155811 = 0; _0x155811 < _0x51448b.length; _0x155811++) {
    const _0x1f1b1d = _0x51448b[_0x155811]
  }
  return _0x293626
}
function _0x41a76b(_0x50c25e) {
  let _0xf1ff3a = '```\n',
    _0x2d1fb3 = 0
  Object.keys(_0x50c25e).forEach((_0x27f6ef) => {
    if (_0x2d1fb3 < 3) {
      _0xf1ff3a += '*' + _0x27f6ef + '*\n\n'
      for (
        let _0x1ef987 = 0;
        _0x1ef987 < _0x50c25e[_0x27f6ef].length;
        _0x1ef987++
      ) {
        const _0x1590f0 = _0x50c25e[_0x27f6ef][_0x1ef987],
          _0x4cdde4 = _0x317d66(_0x1590f0.arrivesAt),
          _0x1a1856 = _0x1590f0.name,
          _0xe1e2ae = _0x490cfc(_0x1590f0.attackType.attackType)
        _0xf1ff3a += _0xe1e2ae + ' ' + _0x1a1856 + _0x4cdde4
        _0xf1ff3a += '\n'
      }
      _0xf1ff3a += '\n'
      _0x2d1fb3++
    }
  })
  _0xf1ff3a += '```'
  _0xf1ff3a += '```diff\n'
  _0xf1ff3a += '+ ' + _0x1a4fa5 + ' novos comandos!'
  _0xf1ff3a += '```\n'
  let _0x3ccb43 = _0x1e45ea[_0x506d42].discordIds[game_data.player.id]
  if (_0x3ccb43) {
    for (let _0x45a443 = 0; _0x45a443 < _0x3ccb43.length; _0x45a443++) {
      _0xf1ff3a += '<@' + _0x3ccb43[_0x45a443] + '>'
    }
  }
  return _0xf1ff3a
}
function _0x4a6c03(_0x5a28e8) {
  let _0x34ba78 = [
    {
      color: null,
      author: { name: _0x43340a.player.name },
      fields: [],
      footer: { text: '+' + _0x1a4fa5 + ' novos comandos!' },
    },
  ]
  return (
    Object.keys(_0x5a28e8).forEach((_0x5db9ed) => {
      let _0x1a45ac = {
        name: _0x5db9ed,
        value: _0x1f3efc,
      }
      let _0x1f3efc = ''
      for (
        let _0x3b5007 = 0;
        _0x3b5007 < _0x5a28e8[_0x5db9ed].length;
        _0x3b5007++
      ) {
        const _0x204e5f = _0x5a28e8[_0x5db9ed][_0x3b5007],
          _0x3a6152 = _0x317d66(_0x204e5f.arrivesAt),
          _0x1a3ddb = _0xca0af0(_0x204e5f),
          _0x98823b = _0x490cfc(_0x204e5f.attackType.attackType)
        _0x1f3efc += _0x98823b + _0x1a3ddb + _0x3a6152
        _0x1f3efc += '\n'
      }
      _0x1f3efc += '\n'
      _0x34ba78[0].fields.push(_0x1a45ac)
    }),
    _0x34ba78
  )
}
function _0x3d6898() {
  let _0x2890a6 = null,
    _0x100e50 = _0xc1b365[_0x43340a.player.id]
  if (!_0x100e50) {
    _0x100e50 = _0x1e45ea[_0x506d42].discordIds[_0x43340a.player.id]
  }
  if (_0x100e50) {
    _0x2890a6 = ''
    for (let _0x21c1b8 = 0; _0x21c1b8 < _0x100e50.length; _0x21c1b8++) {
      _0x2890a6 += '<@' + _0x100e50[_0x21c1b8] + '>'
    }
  }
  return _0x2890a6
}
function _0x431c7e() {
  if (!$('input#select_all.selectAll').is(':checked')) {
    $('input#select_all.selectAll').click()
  }
  setTimeout(function () {
    let _0x47d94d = document.getElementsByName('label')
    if (_0x47d94d[0]) {
      _0x47d94d[0].click()
    }
  }, 200)
}
function _0x185e61() {
  if (_0x1a0af8) {
    if (_0x1a0af8.small_attack) {
      _0x295594 = _0x1a0af8.small_attack
    }
    if (_0x1a0af8.medium_attack) {
      _0x44d6eb = _0x1a0af8.medium_attack
    }
    if (_0x1a0af8.large_attack) {
      _0x4ded5b = _0x1a0af8.large_attack
    }
    if (_0x1a0af8.attack_attack) {
      _0x2c156b = _0x1a0af8.attack_attack
    }
    if (_0x1a0af8.unit_snob) {
      _0x5ee789 = _0x1a0af8.unit_snob
    }
  }
}
function _0x490cfc(_0x1af124) {
  if (_0x1af124.includes('attack_small.png')) {
    return _0x295594
  } else {
    if (_0x1af124.includes('attack_medium.png')) {
      return _0x44d6eb
    } else {
      if (_0x1af124.includes('attack_large.png')) {
        return _0x4ded5b
      } else {
        return _0x2c156b
      }
    }
  }
}
function _0xca0af0(_0x45ee21) {
  if (_0x45ee21.attackType.unit === 'snob') {
    return ' ' + _0x5ee789 + ' ' + _0x45ee21.name.name
  }
  return ' ' + _0x45ee21.name.name
}
function _0x317d66(_0x18d09c) {
  let _0xafecb6 = document.createElement('div'),
    _0x20cd7d = _0x18d09c.substring(
      _0x18d09c.indexOf('<'),
      _0x18d09c.lastIndexOf('>')
    )
  _0xafecb6.innerHTML = _0x20cd7d.trim()
  let _0x3cd899 = _0x18d09c.substring(6, _0x18d09c.indexOf('<'))
  return (
    _0x3cd899.replace(/[\n\t\\tn]/g, ''),
    _0x3cd899 + '' + _0xafecb6.childNodes[0].innerHTML
  )
}
function _0x1cb9aa(_0x53bef2) {
  const _0x391fa0 = new XMLHttpRequest()
  _0x391fa0.open('POST', _0xb638fc[_0x43340a.world])
  _0x391fa0.setRequestHeader('Content-type', 'application/json')
  const _0x4989bb = {
    username: _0x43340a.player.name,
    content: _0x3d6898(),
    embeds: _0x53bef2,
  }
  _0x391fa0.send(JSON.stringify(_0x4989bb))
  console.log('Message sent!')
}
function _0x54bee8(_0x166453) {
  let _0x3a4829 = _0x166453.toLowerCase(),
    _0x3003b5 = 'bat'
  for (let _0x5941b7 in _0x2a0546)
    if (_0x3a4829.includes(_0x5941b7)) {
      _0x3003b5 = _0x5941b7
    }
  return _0x3003b5
}
function _0x5a3833(_0x373fb5, _0x25952e = window.location.href) {
  return new URL(_0x25952e).searchParams.get(_0x373fb5)
}
