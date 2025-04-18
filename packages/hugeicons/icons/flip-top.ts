import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFlipTopIcon],svg[hugeicons-flip-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.667 22h4.666M3.015 16.5c-.017-.5-.018-1-.016-1.5m17.986 1.5c.017-.5.018-1 .017-1.5M3.537 19.255a5 5 0 0 0 2.226 2.217m12.417.028a5 5 0 0 0 2.283-2.245M5.505 12c-1.86 0-2.498-.54-2.498-2.5c0-2.532-.25-5.454 2.248-6.897C6.3 2 7.7 2 10.501 2H13.5c2.801 0 4.202 0 5.246.603c2.498 1.443 2.248 4.365 2.248 6.897c0 1.862-.54 2.5-2.498 2.5z" color="currentColor"></svg:path>`,
})
export class HugeiconsFlipTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
