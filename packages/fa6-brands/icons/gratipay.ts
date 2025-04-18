import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6BrandsGratipayIcon],svg[fa6-brands-gratipay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248s248-111.1 248-248S384.9 8 248 8m114.6 226.4l-113 152.7l-112.7-152.7c-8.7-11.9-19.1-50.4 13.6-72c28.1-18.1 54.6-4.2 68.5 11.9c15.9 17.9 46.6 16.9 61.7 0c13.9-16.1 40.4-30 68.1-11.9c32.9 21.6 22.6 60 13.8 72"></svg:path>`,
})
export class Fa6BrandsGratipayIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}
