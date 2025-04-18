import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFormatAlignBottomIcon],svg[mdi-format-align-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 9l2.5-2.5l1.42 1.42L12 12.84L7.08 7.92L8.5 6.5L11 9V3h2zM3 15h18v2H3zm0 4h10v2H3z"></svg:path>`,
})
export class MdiFormatAlignBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
