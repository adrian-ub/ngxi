import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpUTurnRightIcon],svg[ic-sharp-u-turn-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 9v12h2V9c0-2.21 1.79-4 4-4s4 1.79 4 4v4.17l-1.59-1.59L13 13l4 4l4-4l-1.41-1.41L18 13.17V9c0-3.31-2.69-6-6-6S6 5.69 6 9"></svg:path>`,
})
export class IcSharpUTurnRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
