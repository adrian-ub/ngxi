import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidancePharmacyIcon],svg[guidance-pharmacy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M.5 6.5V10c0 4.56 2.5 8.5 7 10.36v.14l-.123.123a12 12 0 0 1-3.119 2.248l-.758.379v.25h17v-.25l-.758-.38a12 12 0 0 1-3.119-2.247L16.5 20.5v-.14c4.5-1.86 7-5.8 7-10.36V6.5z"></svg:path><svg:path d="M10.5 12.5v-3h3v3h3v3h-3v3h-3v-3h-3v-3zm9-12l-6 6h4l4-4V2A1.5 1.5 0 0 0 20 .5z"></svg:path></svg:g>`,
})
export class GuidancePharmacyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
