import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagTn4x3Icon],svg[flag-tn-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e70013" d="M0 0h640v480H0z"></svg:path><svg:path fill="#fff" d="M320 119.2a1 1 0 0 0-1 240.3a1 1 0 0 0 1-240.3M392 293a90 90 0 1 1 0-107a72 72 0 1 0 0 107m-4.7-21.7l-37.4-12.1l-23.1 31.8v-39.3l-37.4-12.2l37.4-12.2V188l23.1 31.8l37.4-12.1l-23.1 31.8z"></svg:path>`,
})
export class FlagTn4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
