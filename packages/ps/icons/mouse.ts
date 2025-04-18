import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psMouseIcon],svg[ps-mouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 0Q106 0 55.5 50T5 171v170q0 71 50.5 121T176 512t120.5-50T347 341V171q0-71-50.5-121T176 0m128 341q0 53-37.5 90.5T176 469t-90.5-37.5T48 341v-85h256zm0-128H48v-42q0-53 37.5-90.5T176 43t90.5 37.5T304 171zM176 85q-21 0-21 22v64q0 21 21 21t21-21v-64q0-22-21-22"></svg:path>`,
})
export class PsMouseIcon {
  readonly viewBox = input("0 0 352 512")
  readonly width = input("0.69em")
  readonly height = input("1em")
}
