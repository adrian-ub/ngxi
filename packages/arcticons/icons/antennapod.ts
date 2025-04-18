import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAntennapodIcon],svg[arcticons-antennapod-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="21.267" r="3.679" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.643 24.686L15.591 42.5m9.765-17.814L32.409 42.5m-2.607-6.57c5.834-2.312 9.965-8.01 9.965-14.663C39.767 12.564 32.703 5.5 24 5.5S8.233 12.564 8.233 21.267c0 6.654 4.131 12.35 9.965 14.663"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.584 30.307c3.595-1.43 6.139-4.94 6.139-9.04c0-5.371-4.352-9.723-9.723-9.723s-9.723 4.352-9.723 9.723c0 4.1 2.544 7.61 6.139 9.04"></svg:path>`,
})
export class ArcticonsAntennapodIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
