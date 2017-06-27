
const KANJI_NUMS = ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九']
function num2kanji(num) {
  return ('' + num).split('').map(num => KANJI_NUMS[num]).join('')
}


const MORIS = ['', '木', '林']

function num2mori(num) {
  const reminder = num % 3
  const mori = (num - reminder) / 3

  return '森'.repeat(mori) + MORIS[reminder]
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


function createSuzuko(num) {
  return num2kanji(num) + num2mori(num) + num2suzuko(num)
}

