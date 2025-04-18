import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLicenseIcon],svg[hugeicons-license-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.53 2c3.993 0 5.989 0 7.23 1.172C21 4.343 21 6.229 21 10v4c0 3.771 0 5.657-1.24 6.828C18.519 22 16.522 22 12.53 22h-1.06c-3.992 0-5.989 0-7.23-1.172C3 19.657 3 17.771 3 14v-4c0-3.771 0-5.657 1.24-6.828C5.481 2 7.478 2 11.47 2zM8 7h8m-8 5h8m-8 5h4" color="currentColor"></svg:path>`,
})
export class HugeiconsLicenseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
