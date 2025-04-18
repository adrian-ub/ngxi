import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiResizeWidthIcon],svg[oi-resize-width-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1L0 3.5L3 6V4h2v2l3-2.5L5 1v2H3z"></svg:path>`,
})
export class OiResizeWidthIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
