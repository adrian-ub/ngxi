import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elReduxIcon],svg[el-redux-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M363.858 1007.552L259.669 1123.59H0l259.468-293.53zm322.77 116.038h-222.51l-66.197-112.614l134.429-149.7zM383.214 985.984L20.943 370.06h222.499l168.881 287.129L925.741 76.41H1200z"></svg:path>`,
})
export class ElReduxIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
