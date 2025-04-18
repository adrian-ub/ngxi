import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBlackPieIconPackIcon],svg[arcticons-black-pie-icon-pack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="29.833" cy="16.926" r="11.426" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.437 20.366a11.4 11.4 0 0 0-4.722 9.25c0 6.318 5.11 11.429 11.417 11.429a11.4 11.4 0 0 0 8.086-3.343"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.58 21.962a6.7 6.7 0 0 1-3.741 1.132a6.7 6.7 0 0 1-5.402-2.728a6.67 6.67 0 0 1-1.337-4.01a6.743 6.743 0 0 1 6.739-6.75c1.584 0 3.04.55 4.193 1.467m6.114 16.667a9.04 9.04 0 0 0-1.995 5.682a9.069 9.069 0 1 0 18.134 0c0-3.46-1.94-6.48-4.808-8.01"></svg:path>`,
})
export class ArcticonsBlackPieIconPackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
