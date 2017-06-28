
const KANJI_NUMS = ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九']
function num2kanji(num) {
  return ('' + num).split('').map(num => KANJI_NUMS[num]).join('')
}


const MORIS = [
  ['', '木', '林'],
  ['', '木', '林', '森', '林林', '森林']
]

function num2mori(num, version) {
  if (version > MORIS.length) version = 0

  const split = MORIS[version].length

  const reminder = num % split
  const mori = (num - reminder) / split

  return '森'.repeat(split / 3).repeat(mori) + MORIS[version][reminder]
}


const KANAS = ['あ', 'い', 'う', 'え', 'お',
               'か', 'き', 'く', 'け', 'こ',
               'さ', 'し', 'す', 'せ', 'そ',
               'た', 'ち', 'つ', 'て', 'と',
               'な', 'に', 'ぬ', 'ね', 'の',
               'は', 'ひ', 'ふ', 'へ', 'ほ',
               'ま', 'み', 'む', 'め', 'も',
               'や',       'ゆ',       'よ',
               'ら', 'り', 'る', 'れ', 'ろ',
               'わ', 'を', 'ん']

const DAKUTEN = '\u3099'
// SU(KANAS[12]) = 3
const ORG = 9
function num2suzuko(num) {
  const idx = (num + ORG) % KANAS.length
  return KANAS[idx] + KANAS[idx] + DAKUTEN + 'こ'
}


function createSuzuko(num, version) {
  return num2kanji(num) + num2mori(num, version) + num2suzuko(num)
}

