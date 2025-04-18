import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggArrowLongDownCIcon],svg[gg-arrow-long-down-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 6.85a3.001 3.001 0 1 1 2 0l.012 12.288l1.812-1.823l1.419 1.41l-4.231 4.255l-4.255-4.23l1.41-1.42l1.845 1.835zm.998-1.83a1 1 0 1 1 0-2a1 1 0 0 1 0 2" clip-rule="evenodd"></svg:path>`,
})
export class GgArrowLongDownCIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
