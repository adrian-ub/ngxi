import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixAddShieldHalfIcon],svg[ix-add-shield-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.667 120.242L256 42.667L85.333 120.242v116.364c0 107.637 72.818 208.29 170.667 232.727l5.617-1.493c12.843-3.627 25.231-8.567 37.05-14.664v-90.509h64v-64h55.942c5.252-20.069 8.058-40.93 8.058-62.061zM128 147.712l128-58.197v335.424l-4.661-1.598C180.854 397.666 128 319.868 128 236.606zm256 342.955v-64h-64V384h64v-64h42.667v64h64v42.667h-64v64z" clip-rule="evenodd"></svg:path>`,
})
export class IxAddShieldHalfIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
