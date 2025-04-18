import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainVuejsIcon],svg[devicon-plain-vuejs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 8.934l49.854.158l14.3 24.415l14.3-24.415l49.548-.158l-63.835 110.134zm126.987.637l-24.37.021l-38.473 66.053L25.692 9.592l-24.75-.02l63.212 107.89z"></svg:path>`,
})
export class DeviconPlainVuejsIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
