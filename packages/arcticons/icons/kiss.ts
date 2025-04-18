import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKissIcon],svg[arcticons-kiss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5A21.5 21.5 0 1 0 45.5 24h0A21.51 21.51 0 0 0 24 2.5m0 5.22c8.53 0 16.28 7.76 16.28 16.28S32.52 40.28 24 40.28S7.72 32.52 7.72 24S15.47 7.72 24 7.72"></svg:path>`,
})
export class ArcticonsKissIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
