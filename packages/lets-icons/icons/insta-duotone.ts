import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsInstaDuotoneIcon],svg[lets-icons-insta-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".25" d="M3 11c0-3.771 0-5.657 1.172-6.828S7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172S21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828S16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172S3 16.771 3 13z"></svg:path><svg:circle cx="17" cy="7" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="12" r="3" fill="currentColor"></svg:circle>`,
})
export class LetsIconsInstaDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
