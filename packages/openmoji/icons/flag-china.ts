import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagChinaIcon],svg[openmoji-flag-china-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d22f27" d="M5 17h62v38H5z"></svg:path><svg:circle cx="24" cy="34" r="1.75" fill="#f1b31c"></svg:circle><svg:circle cx="24" cy="24" r="1.75" fill="#f1b31c"></svg:circle><svg:circle cx="28" cy="31" r="1.75" fill="#f1b31c"></svg:circle><svg:circle cx="28" cy="26" r="1.75" fill="#f1b31c"></svg:circle><svg:path fill="#f1b31c" stroke="#f1b31c" stroke-linecap="round" stroke-linejoin="round" d="m13.528 32.445l2.472-8l2.473 8L12 27.5h8z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagChinaIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
