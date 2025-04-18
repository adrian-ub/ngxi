import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLightningIcon],svg[arcticons-lightning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.89 19.052H26.155V5.986a.5.5 0 0 0-.898-.302L9.118 26.95c-.622.82-.037 1.997.992 1.997h11.735v13.066a.5.5 0 0 0 .898.302L38.882 21.05c.622-.82.037-1.997-.992-1.997Z"></svg:path>`,
})
export class ArcticonsLightningIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
