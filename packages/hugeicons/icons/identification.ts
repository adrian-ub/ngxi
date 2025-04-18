import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsIdentificationIcon],svg[hugeicons-identification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.135 2.5c-2.666.06-4.223.314-5.287 1.375C2.916 4.803 2.605 6.107 2.5 8.2m12.366-5.7c2.666.06 4.223.314 5.287 1.375c.932.928 1.243 2.232 1.347 4.325m-6.634 13.3c2.666-.06 4.223-.315 5.287-1.375c.932-.928 1.243-2.233 1.347-4.325M9.135 21.5c-2.666-.06-4.223-.315-5.287-1.375c-.932-.928-1.243-2.233-1.347-4.325M8 17c1.838-2.595 6.119-2.737 8 0m-1.5-7.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0" color="currentColor"></svg:path>`,
})
export class HugeiconsIdentificationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
