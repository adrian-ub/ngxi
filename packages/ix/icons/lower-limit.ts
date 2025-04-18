import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixLowerLimitIcon],svg[ix-lower-limit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 405.333L114.325 287.296l27.328-32.79l93.013 77.505V64h42.667v268.01l92.992-77.503l27.328 32.789zm-170.667 0h341.333V448H85.333z"></svg:path>`,
})
export class IxLowerLimitIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
