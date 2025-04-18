import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siCloseDuotoneIcon],svg[si-close-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m7.757 16.243l8.486-8.486m0 8.486L7.757 7.757"></svg:path>`,
})
export class SiCloseDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
