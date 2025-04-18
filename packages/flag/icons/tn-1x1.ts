import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagTn1x1Icon],svg[flag-tn-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e70013" d="M0 0h512v512H0z"></svg:path><svg:path fill="#fff" d="M256 135a1 1 0 0 0-1 240a1 1 0 0 0 0-241zm72 174a90 90 0 1 1 0-107a72 72 0 1 0 0 107m-4.7-21.7l-37.4-12.1l-23.1 31.8v-39.3l-37.3-12.2l37.3-12.2v-39.4l23.1 31.9l37.4-12.1l-23.1 31.8z"></svg:path>`,
})
export class FlagTn1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
