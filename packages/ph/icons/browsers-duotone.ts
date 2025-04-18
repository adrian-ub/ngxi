import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBrowsersDuotoneIcon],svg[ph-browsers-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v112a8 8 0 0 1-8 8h-24V88a8 8 0 0 0-8-8H64V56a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 40H72a16 16 0 0 0-16 16v16H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-16h16a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M40 88h144v16H40Zm144 112H40v-80h144zm32-32h-16V88a16 16 0 0 0-16-16H72V56h144Z"></svg:path></svg:g>`,
})
export class PhBrowsersDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
