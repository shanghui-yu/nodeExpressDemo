const fs = require('fs')

let list = []
const files = fs.readdirSync('./routes')
const reg = new RegExp('.js$', '')
function eachPush(files, name){
  files.forEach(file => {
    if (reg.test(file) && file !== 'index.js') {
      file = file.replace(/\.js$/, '')
      let path = name ? `/${name}/${file}` : `/${file}`
      let router = name ? require(`./${name}/${file}`) : require(`./${file}`)
      let obj = {
        path,
        router
      }
      list.push(obj)
    } else if (!reg.test(file) && file !== 'index.js' && file !== '.DS_Store') {
      const newfiles = fs.readdirSync(`./routes/${file}`)
      eachPush(newfiles, file)
    }
  })
}
eachPush(files)

module.exports = list
