import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siReorderDuotoneIcon],svg[si-reorder-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M4 12h16M4 15h16M4 18h16M4 9h16M4 6h16"></svg:path>`,
})
export class SiReorderDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
