import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsJellyIcon],svg[arcticons-jelly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5a21.5 21.5 0 0 0 0 43c4.45 0 8.06-9.63 8.06-21.5S28.45 2.5 24 2.5m0 43a21.49 21.49 0 0 0 1.09-42.95c8 .81 14.25 10.17 14.25 21.45c0 11.87-6.87 21.5-15.34 21.5"></svg:path>`,
})
export class ArcticonsJellyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
