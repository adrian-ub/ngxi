import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonAccessibilityColorFilledIcon],svg[carbon-accessibility-color-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 10a8.6 8.6 0 0 0-7.965 6A8.6 8.6 0 0 0 16 22a8.6 8.6 0 0 0 7.965-6A8.6 8.6 0 0 0 16 10m0 10a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4"></svg:path><svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 22a10.65 10.65 0 0 1-9.97-7.758L5.97 16l.06-.242A10.65 10.65 0 0 1 16 8a10.65 10.65 0 0 1 9.97 7.758l.06.242l-.06.242A10.65 10.65 0 0 1 16 24"></svg:path><svg:circle cx="16" cy="16" r="2" fill="currentColor"></svg:circle><svg:path fill="none" d="M16 20a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2"></svg:path><svg:path fill="none" d="M16 24a10.655 10.655 0 0 1-9.97-7.758L5.97 16l.06-.242A10.655 10.655 0 0 1 16 8a10.655 10.655 0 0 1 9.97 7.758l.06.242l-.06.242A10.655 10.655 0 0 1 16 24m-7.965-8A8.6 8.6 0 0 0 16 22a8.6 8.6 0 0 0 7.965-6A8.6 8.6 0 0 0 16 10a8.6 8.6 0 0 0-7.965 6"></svg:path>`,
})
export class CarbonAccessibilityColorFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
