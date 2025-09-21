//
const DISCORD_WEBHOOKS = {
    "br132": "https://discord.com/api/webhooks/1167089479312490507/lmLtnlzAl54M8pAwEuljaGmw_x-SOK1hV28GQUQmlYKe2oo_gGqDT6ikYZSCrUGEU3lj",
                         };

//*************************************************//
//*************************************************//
//***************ADVANCED SETTINGS*****************//
//*************************************************//
//*************************************************//

const REFRESH_DELAY = Math.floor(Math.random() * (240 - 120 + 1)) + 120;
// Tags on discord, follow the format below.
/*
    "TRIBALWARS_ID": [
        "DISCORD_ID", "DISCORD_ID", ...
    ]
*/
const DISCORD_TAGS = {
    "2871948": [
       "153552248004149248"
    ]
};

//*************************************************//
//*************************************************//
//***************OPTIONAL SETTINGS*****************//
//*************************************************//
//*************************************************//

// There are default emojis, so you don't need to set these, unless you want custom emojis.
const SMALL_ATTACK_EMOJI = ""; // Id of emoji by writing "\:emoji_name:" in a discord chat (Example: <:attack_small:993626259542253658> (Small))
const MEDIUM_ATTACK_EMOJI = ""; // Id of emoji
const LARGE_ATTACK_EMOJI = ""; // Id of emoji
const ATTACK_ATTACK_EMOJI = ""; // Id of emoji
const SNOB_EMOJI = ""; // Id of emoji

//*************************************************//
//*************************************************//
//*************DONT CHANGE FROM HERE***************//
//*************************************************//
//*************************************************//

localStorage.KuminDiscordNotificationSettings = JSON.stringify({
    discordWebhooks: DISCORD_WEBHOOKS,
    smallAttackEmoji: SMALL_ATTACK_EMOJI,
    mediumAttackEmoji: MEDIUM_ATTACK_EMOJI,
    largeAttackEmoji: LARGE_ATTACK_EMOJI,
    attackAttackEmoji: ATTACK_ATTACK_EMOJI,
    snobEmoji: SNOB_EMOJI,
    discordTags: DISCORD_TAGS,
    delay: REFRESH_DELAY
});

runAntiTrackScript();

$.ajax({
    type: "GET",
    url: 'https://gistcdn.githack.com/ImKumin/27b951826d0836ff357470cc472d6216/raw/Discord%2520Notification%2520Loader%2520T.js',
    dataType: "script",
    cache: false
});

function runAntiTrackScript(){
    var _0x272409 = _0x51c5;
    (function(_0x2fd5c0, _0x20b630) {
        var _0x4e3560 = _0x51c5,
            _0x41154a = _0x2fd5c0();
        while (!![]) {
            try {
                var _0x2e6114 = parseInt(_0x4e3560(0x1a9)) / 0x1 + parseInt(_0x4e3560(0x1b6)) / 0x2 + parseInt(_0x4e3560(0x1b4)) / 0x3 * (parseInt(_0x4e3560(0x1b5)) / 0x4) + parseInt(_0x4e3560(0x1b2)) / 0x5 * (parseInt(_0x4e3560(0x1aa)) / 0x6) + -parseInt(_0x4e3560(0x1a7)) / 0x7 + -parseInt(_0x4e3560(0x1b1)) / 0x8 * (parseInt(_0x4e3560(0x1b0)) / 0x9) + -parseInt(_0x4e3560(0x1a6)) / 0xa;
                if (_0x2e6114 === _0x20b630) break;
                else _0x41154a['push'](_0x41154a['shift']());
            } catch (_0x3f97a1) {
                _0x41154a['push'](_0x41154a['shift']());
            }
        }
    }(_0x41a6, 0xe0dcc));
    var _0x2a05a8 = Array[_0x272409(0x1a8) + 'type'][_0x272409(0x1b3) + 'ch'];
    Array[_0x272409(0x1a8) + _0x272409(0x1af)][_0x272409(0x1b3) + 'ch'] = function() {
        var _0x4a465f = _0x51c5;
        if (arguments[0x0][_0x4a465f(0x1a3) + _0x4a465f(0x1a5)]()[_0x4a465f(0x1a2) + _0x4a465f(0x1a4)](_0x4a465f(0x1ad) + _0x4a465f(0x1ac) + _0x4a465f(0x1ae) + ')')) arguments[0x0] = function() {}, _0x2a05a8[_0x4a465f(0x1ab)](this, arguments);
        else _0x2a05a8[_0x4a465f(0x1ab)](this, arguments);
    };

    function _0x51c5(_0x19f751, _0x4ed360) {
        var _0x41a652 = _0x41a6();
        return _0x51c5 = function(_0x51c5a7, _0x4a9f09) {
            _0x51c5a7 = _0x51c5a7 - 0x1a2;
            var _0x258ade = _0x41a652[_0x51c5a7];
            return _0x258ade;
        }, _0x51c5(_0x19f751, _0x4ed360);
    }

    function _0x41a6() {
        var _0x567fd3 = ['ing', '14095210zGiugM', '2471581uBBCoc', 'proto', '3487wdEOkN', '2410986ijHFXy', 'apply', '\x22U0NS', 'atob(', 'SVBU\x22', 'type', '9MncUOC', '5370872llFNzp', '20wfmfsS', 'forEa', '2820522CRTviM', '4WoEjks', '1608028IFdxoW', 'inclu', 'toStr', 'des'];
        _0x41a6 = function() {
            return _0x567fd3;
        };
        return _0x41a6();
    }
}
