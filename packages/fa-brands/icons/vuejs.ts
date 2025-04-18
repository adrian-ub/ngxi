import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBrandsVuejsIcon],svg[fa-brands-vuejs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M356.9 64.3H280l-56 88.6l-48-88.6H0L224 448L448 64.3zm-301.2 32h53.8L224 294.5L338.4 96.3h53.8L224 384.5z"></svg:path>`,
})
export class FaBrandsVuejsIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
