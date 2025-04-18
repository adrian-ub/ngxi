import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBrandsAngularIcon],svg[fa-brands-angular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M185.7 268.1h76.2l-38.1-91.6zM223.8 32L16 106.4l31.8 275.7l176 97.9l176-97.9l31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"></svg:path>`,
})
export class FaBrandsAngularIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
