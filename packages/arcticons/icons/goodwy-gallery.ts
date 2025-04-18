import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGoodwyGalleryIcon],svg[arcticons-goodwy-gallery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="24" cy="24" r="6.959"></svg:circle><svg:circle cx="24" cy="11.373" r="8.873"></svg:circle><svg:circle cx="32.929" cy="15.071" r="8.873"></svg:circle><svg:circle cx="36.627" cy="24" r="8.873"></svg:circle><svg:circle cx="32.929" cy="32.929" r="8.873"></svg:circle><svg:circle cx="24" cy="36.627" r="8.873"></svg:circle><svg:circle cx="15.071" cy="32.929" r="8.873"></svg:circle><svg:circle cx="11.373" cy="24" r="8.873"></svg:circle><svg:circle cx="15.071" cy="15.071" r="8.873"></svg:circle></svg:g>`,
})
export class ArcticonsGoodwyGalleryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
