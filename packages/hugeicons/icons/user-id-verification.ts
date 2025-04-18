import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserIdVerificationIcon],svg[hugeicons-user-id-verification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.134 2.5c-2.666.06-4.223.315-5.287 1.375C2.915 4.803 2.604 6.108 2.5 8.2m12.366-5.7c2.666.06 4.223.315 5.287 1.375c.932.928 1.243 2.233 1.347 4.325m-6.634 13.3c2.666-.06 4.223-.315 5.287-1.375c.932-.928 1.243-2.233 1.347-4.325M9.134 21.5c-2.666-.06-4.223-.315-5.287-1.375c-.932-.928-1.243-2.233-1.347-4.325m5 1.2c2.332-2.442 6.643-2.557 9 0m-2.005-7.5c0 1.38-1.12 2.5-2.503 2.5a2.5 2.5 0 0 1-2.504-2.5c0-1.38 1.12-2.5 2.504-2.5a2.5 2.5 0 0 1 2.503 2.5" color="currentColor"></svg:path>`,
})
export class HugeiconsUserIdVerificationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
