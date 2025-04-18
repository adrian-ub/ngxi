import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagSingaporeIcon],svg[openmoji-flag-singapore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d22f27" d="M5 17h62v38H5z"></svg:path><svg:path fill="#fff" d="M5 36h62v19H5z"></svg:path><svg:circle cx="20" cy="22" r="1" fill="#fff"></svg:circle><svg:circle cx="18" cy="27" r="1" fill="#fff"></svg:circle><svg:circle cx="22" cy="27" r="1" fill="#fff"></svg:circle><svg:circle cx="17" cy="24" r="1" fill="#fff"></svg:circle><svg:circle cx="23" cy="24" r="1" fill="#fff"></svg:circle><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M11.199 24.923A4.87 4.87 0 0 1 15 20.094a4.5 4.5 0 0 0-.912-.094a4.927 4.927 0 0 0 0 9.845a4.5 4.5 0 0 0 .912-.094a4.87 4.87 0 0 1-3.801-4.828"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagSingaporeIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
