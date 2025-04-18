import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagUnitedStatesIcon],svg[openmoji-flag-united-states-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M5 17h62v38H5z"></svg:path><svg:path fill="#d22f27" d="M5 17h62v5H5zm0 9h62v4H5zm0 8h62v4H5z"></svg:path><svg:path fill="#1e50a0" d="M5 17h32v21H5z"></svg:path><svg:path fill="#d22f27" d="M5 42h62v4H5z"></svg:path><svg:circle cx="9.5" cy="22" r="1.75" fill="#fff"></svg:circle><svg:circle cx="17.5" cy="22" r="1.75" fill="#fff"></svg:circle><svg:circle cx="25.5" cy="22" r="1.75" fill="#fff"></svg:circle><svg:circle cx="33.5" cy="22" r="1.75" fill="#fff"></svg:circle><svg:circle cx="29.5" cy="26" r="1.75" fill="#fff"></svg:circle><svg:circle cx="21.5" cy="26" r="1.75" fill="#fff"></svg:circle><svg:circle cx="13.5" cy="26" r="1.75" fill="#fff"></svg:circle><svg:circle cx="9.5" cy="30" r="1.75" fill="#fff"></svg:circle><svg:circle cx="17.5" cy="30" r="1.75" fill="#fff"></svg:circle><svg:circle cx="25.5" cy="30" r="1.75" fill="#fff"></svg:circle><svg:circle cx="33.5" cy="30" r="1.75" fill="#fff"></svg:circle><svg:circle cx="29.5" cy="34" r="1.75" fill="#fff"></svg:circle><svg:circle cx="21.5" cy="34" r="1.75" fill="#fff"></svg:circle><svg:circle cx="13.5" cy="34" r="1.75" fill="#fff"></svg:circle><svg:path fill="#d22f27" d="M5 50h62v5H5z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagUnitedStatesIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
