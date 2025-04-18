import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggEricssonIcon],svg[gg-ericsson-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.717 5.723a2 2 0 1 0 1.69 3.625l10.876-5.071a2 2 0 0 0-1.69-3.625zM4.75 15.381a2 2 0 0 1 .967-2.658l10.876-5.071a2 2 0 1 1 1.69 3.625L7.407 16.348a2 2 0 0 1-2.657-.967m-2 7a2 2 0 0 1 .967-2.658l10.876-5.071a2 2 0 1 1 1.69 3.625L5.407 23.348a2 2 0 0 1-2.657-.967"></svg:path>`,
})
export class GgEricssonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
