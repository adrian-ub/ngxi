import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBrandsServicestackIcon],svg[fa-brands-servicestack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 216c81.7 10.2 273.7 102.3 304 232H0c99.5-8.1 184.5-137 88-232m32-152c32.3 35.6 47.7 83.9 46.4 133.6C249.3 231.3 373.7 321.3 400 448h96C455.3 231.9 222.8 79.5 120 64"></svg:path>`,
})
export class FaBrandsServicestackIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}
