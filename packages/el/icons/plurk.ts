import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elPlurkIcon],svg[el-plurk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v1200h230.609V284.605h734.963v652.468H416.6V1200H1200V0z"></svg:path><svg:path fill="currentColor" d="M425.599 460.097h353.982v282.206H425.599z"></svg:path>`,
})
export class ElPlurkIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
