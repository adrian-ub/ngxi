import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosMoonIcon],svg[logos-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:radialgradient id="logosMoon0" cx="50%" cy="50%" r="49.789%" fx="50%" fy="50%"><svg:stop offset="0%" stop-color="#4600D1"></svg:stop><svg:stop offset="49.285%" stop-color="#4600D1"></svg:stop><svg:stop offset="100%" stop-color="#35009F"></svg:stop></svg:radialgradient><svg:radialgradient id="logosMoon1" cx="50%" cy="50%" r="49.603%" fx="50%" fy="50%"><svg:stop offset="0%" stop-color="#35019E"></svg:stop><svg:stop offset="18.73%" stop-color="#320194"></svg:stop><svg:stop offset="100%" stop-color="#206"></svg:stop></svg:radialgradient><svg:circle id="logosMoon2" cx="128" cy="128" r="128"></svg:circle></svg:defs><svg:circle cx="128" cy="128" r="128" fill="#5805FF"></svg:circle><svg:mask id="logosMoon3" fill="#fff"><svg:use href="#logosMoon2"></svg:use></svg:mask><svg:circle cx="199.694" cy="105.369" r="128" fill="url(#logosMoon0)" mask="url(#logosMoon3)"></svg:circle><svg:circle cx="275.372" cy="82.376" r="128" fill="url(#logosMoon1)" mask="url(#logosMoon3)"></svg:circle>`,
})
export class LogosMoonIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
