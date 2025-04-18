import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFlipBottomIcon],svg[hugeicons-flip-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.333 2H9.667m11.318 5.5c.017.5.018 1 .017 1.5M3.015 7.5C2.998 8 2.997 8.5 3 9m17.464-4.255a5 5 0 0 0-2.226-2.217M5.82 2.5a5 5 0 0 0-2.283 2.245M18.495 12c1.958 0 2.498.638 2.498 2.5c0 2.532.25 5.454-2.248 6.897C17.7 22 16.3 22 13.499 22H10.5c-2.8 0-4.2 0-5.245-.603c-2.498-1.443-2.248-4.365-2.248-6.897c0-1.96.637-2.5 2.498-2.5z" color="currentColor"></svg:path>`,
})
export class HugeiconsFlipBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
