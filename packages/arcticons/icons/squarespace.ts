import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSquarespaceIcon],svg[arcticons-squarespace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.878 25.171L25.17 36.878a6.62 6.62 0 0 1-9.365 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.488 32.195l11.707-11.707a6.622 6.622 0 1 1 9.365 9.365l-9.365 9.366m-21.073-16.39L22.83 11.122a6.62 6.62 0 0 1 9.365 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.512 15.805L15.805 27.512a6.622 6.622 0 1 1-9.365-9.365l9.365-9.366"></svg:path>`,
})
export class ArcticonsSquarespaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
