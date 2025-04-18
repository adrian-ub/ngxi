import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLibremtunnelIcon],svg[arcticons-libremtunnel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.77 37.7v5.8h-3.9v-5.78a13.88 13.88 0 0 0-27.76 0v5.78h-3.9V22.27a17.77 17.77 0 1 1 35.53 0Z"></svg:path>`,
})
export class ArcticonsLibremtunnelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
