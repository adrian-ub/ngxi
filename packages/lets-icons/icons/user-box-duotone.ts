import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsUserBoxDuotoneIcon],svg[lets-icons-user-box-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".25" d="M3 11c0-3.771 0-5.657 1.172-6.828S7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172S21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828S16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172S3 16.771 3 13z"></svg:path><svg:circle cx="12" cy="10" r="4" fill="currentColor"></svg:circle><svg:path fill="currentColor" fill-rule="evenodd" d="M18.946 20.253a.23.23 0 0 1-.14.25C17.605 21 15.836 21 13 21h-2c-2.835 0-4.605 0-5.806-.498a.23.23 0 0 1-.14-.249C5.483 17.292 8.429 15 12 15s6.517 2.292 6.946 5.253" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsUserBoxDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
