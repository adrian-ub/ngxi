import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siChevronLeftSquareDuotoneIcon],svg[si-chevron-left-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path fill="currentColor" fill-opacity=".16" stroke-miterlimit="10" d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m14 16l-4-4l4-4"></svg:path></svg:g>`,
})
export class SiChevronLeftSquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
