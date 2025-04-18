import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiMoveIcon],svg[oi-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 0L2 1.5h1V3H1.5V2L0 3.5L1.5 5V4H3v1.5H2L3.5 7L5 5.5H4V4h1.5v1L7 3.5L5.5 2v1H4V1.5h1z"></svg:path>`,
})
export class OiMoveIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
