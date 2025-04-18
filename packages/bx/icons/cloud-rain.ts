import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxCloudRainIcon],svg[bx-cloud-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 13h2v7H8zm3 2h2v7h-2zm3-2h2v7h-2z"></svg:path><svg:path fill="currentColor" d="M18.944 10.113C18.507 6.671 15.56 4.001 12 4.001c-2.756 0-5.15 1.611-6.243 4.15C3.609 8.793 2 10.82 2 13.001c0 2.757 2.243 5 5 5v-2c-1.654 0-3-1.346-3-3c0-1.403 1.199-2.756 2.673-3.015l.581-.103l.192-.559C8.149 7.274 9.895 6.001 12 6.001c2.757 0 5 2.243 5 5v1h1c1.103 0 2 .897 2 2s-.897 2-2 2h-1v2h1c2.206 0 4-1.794 4-4a4.01 4.01 0 0 0-3.056-3.888"></svg:path>`,
})
export class BxCloudRainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
