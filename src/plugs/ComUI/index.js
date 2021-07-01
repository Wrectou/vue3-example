import comButton from '@//plugs/ComUI/comButton'
import comInput from '@//plugs/ComUI/comInput'

const componsntsArr = [
  comButton,
  comInput,
]

export default {
  install: (app, options) => {
    // console.log(app, options);
    componsntsArr.map(comp => {
      app.component(comp.name, comp)
    })
  }
}