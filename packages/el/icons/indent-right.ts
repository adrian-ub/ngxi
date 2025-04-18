import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elIndentRightIcon],svg[el-indent-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 100.231v176.147h1200V100.305zm1200 274.512L862.061 600.036L1200 825.329zM0 376.062v175.562h693.75V376.062zm0 273.706V825.33h693.75V649.768zm1200 273.926L0 923.768v176.001h1200z"></svg:path>`,
})
export class ElIndentRightIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
