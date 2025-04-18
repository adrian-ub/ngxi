import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psAlignCenteredIcon],svg[ps-align-centered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M85 43q-21 0-21 21t21 21h214q21 0 21-21t-21-21zM21 149q0 22 22 22h298q22 0 22-22q0-9-6-15t-16-6H43q-10 0-16 6t-6 15m86 64q-22 0-22 22q0 9 6 15t16 6h170q10 0 16-6t6-15q0-22-22-22zM0 320q0 21 21 21h342q21 0 21-21t-21-21H21q-21 0-21 21"></svg:path>`,
})
export class PsAlignCenteredIcon {
  readonly viewBox = input("0 0 384 448")
  readonly width = input("0.86em")
  readonly height = input("1em")
}
