import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siReorderAltDuotoneIcon],svg[si-reorder-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M4 12h16M4 16h16M4 20h16M4 8h16M4 4h16"></svg:path>`,
})
export class SiReorderAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
