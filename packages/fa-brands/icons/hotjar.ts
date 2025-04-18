import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBrandsHotjarIcon],svg[fa-brands-hotjar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M414.9 161.5C340.2 29 121.1 0 121.1 0S222.2 110.4 93 197.7C11.3 252.8-21 324.4 14 402.6c26.8 59.9 83.5 84.3 144.6 93.4c-29.2-55.1-6.6-122.4-4.1-129.6c57.1 86.4 165 0 110.8-93.9c71 15.4 81.6 138.6 27.1 215.5c80.5-25.3 134.1-88.9 148.8-145.6c15.5-59.3 3.7-127.9-26.3-180.9"></svg:path>`,
})
export class FaBrandsHotjarIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
