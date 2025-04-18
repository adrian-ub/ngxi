import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBackgroundsIcon],svg[arcticons-backgrounds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="21.064" height="32.17" x="10.037" y="11.33" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.561" ry="2.561"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.452 11.33v-.854a2.56 2.56 0 0 1 2.561-2.561h15.942a2.56 2.56 0 0 1 2.561 2.561v27.048a2.56 2.56 0 0 1-2.561 2.561H31.1"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.899 7.915V7.06A2.56 2.56 0 0 1 19.46 4.5h15.942a2.56 2.56 0 0 1 2.56 2.561V34.11a2.56 2.56 0 0 1-2.56 2.561h-.886"></svg:path>`,
})
export class ArcticonsBackgroundsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
