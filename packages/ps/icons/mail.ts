import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psMailIcon],svg[ps-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469 21H43q-18 0-30.5 13T0 64v256q0 17 12.5 30T43 363h426q18 0 30.5-13t12.5-30V64q0-17-12.5-30T469 21m-40 43L256 166L83 64zM43 320V90l202 121q2 2 11 2t11-2L469 90v230z"></svg:path>`,
})
export class PsMailIcon {
  readonly viewBox = input("0 0 512 448")
  readonly width = input("1.15em")
  readonly height = input("1em")
}
