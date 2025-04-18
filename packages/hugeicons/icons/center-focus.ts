import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCenterFocusIcon],svg[hugeicons-center-focus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.134 2.5c-2.666.06-4.223.315-5.287 1.375C2.915 4.803 2.604 6.108 2.5 8.2m12.366-5.7c2.666.06 4.223.315 5.287 1.375c.932.928 1.243 2.233 1.347 4.325m-6.634 13.3c2.666-.06 4.223-.315 5.287-1.375c.932-.928 1.243-2.233 1.347-4.325M9.134 21.5c-2.666-.06-4.223-.315-5.287-1.375c-.932-.928-1.243-2.233-1.347-4.325M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0" color="currentColor"></svg:path>`,
})
export class HugeiconsCenterFocusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
