import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiWallFuzoIcon],svg[cbi-wall-fuzo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2L5.5 3v18l4.75 1l.75-.25V21l4.5-.75l2.5.25h.5V5.25l-.75-.5l-2.5.25l-4.5-1.25V2.5Zm.75 2.75l6.5 1.75v10.25l-6.25.5Z"></svg:path>`,
})
export class CbiWallFuzoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
