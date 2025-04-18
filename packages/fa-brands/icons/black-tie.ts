import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBrandsBlackTieIcon],svg[fa-brands-black-tie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 32v448h448V32zm316.5 325.2L224 445.9l-92.5-88.7l64.5-184l-64.5-86.6h184.9L252 173.2z"></svg:path>`,
})
export class FaBrandsBlackTieIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
