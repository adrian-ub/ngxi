import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixUpperLimitIcon],svg[ix-upper-limit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 106.667L114.325 224.704l27.328 32.79l93.013-77.505V448h42.667V179.99l92.992 77.503l27.328-32.789zm-170.667 0h341.333V64H85.333z"></svg:path>`,
})
export class IxUpperLimitIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
