import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosAppcenterIconIcon],svg[logos-appcenter-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#CB2E63" d="m78.765 0l44.308 9.946v71.578l73.847-51.7v59.648l-73.847 39.77l73.847 39.771v59.648l-73.847-51.7v71.578l-44.308 9.946L0 188.89v-29.824l45.445-29.823L0 99.418V69.594zm.007 149.122l-55.134 27.84l55.134 41.754zm0-109.35L23.638 81.526l55.134 27.84zM256 49.719l-59.077-19.893v198.837L256 208.771z"></svg:path>`,
})
export class LogosAppcenterIconIcon {
  readonly viewBox = input("0 0 256 259")
  readonly width = input("0.99em")
  readonly height = input("1em")
}
