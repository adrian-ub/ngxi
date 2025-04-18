import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiResizeHeightIcon],svg[oi-resize-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 0L1 3h2v2H1l2.5 3L6 5H4V3h2z"></svg:path>`,
})
export class OiResizeHeightIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
