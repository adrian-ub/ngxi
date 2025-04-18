import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psMinusBoxIcon],svg[ps-minus-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M405 0H107Q62 0 31 31T0 107v298q0 45 31 76t76 31h298q45 0 76-31t31-76V107q0-45-31-76T405 0m64 405q0 28-18 46t-46 18H107q-28 0-46-18t-18-46V107q0-28 18-46t46-18h298q28 0 46 18t18 46zM363 235H149q-21 0-21 21t21 21h214q21 0 21-21t-21-21"></svg:path>`,
})
export class PsMinusBoxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
