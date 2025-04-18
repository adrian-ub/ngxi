import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsZeitOnlineIcon],svg[arcticons-zeit-online-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.189 33.816L34.9 43.338L8.81 43.5L32.305 4.837M10.151 13.2l3.88-8.538l24.73-.162l-23.495 38.663"></svg:path>`,
})
export class ArcticonsZeitOnlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
