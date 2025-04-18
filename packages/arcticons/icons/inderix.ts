import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsInderixIcon],svg[arcticons-inderix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m37.815 16.893l6.386 6.386a1.02 1.02 0 0 1 0 1.442L32.79 36.132"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.658 6.842h16.138c.563 0 1.02.457 1.02 1.02V24c0 9.476-7.683 17.158-17.158 17.158S3.5 33.476 3.5 24S11.182 6.842 20.658 6.842M13.24 16.901v14.198m7.418-14.198v14.198"></svg:path>`,
})
export class ArcticonsInderixIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
