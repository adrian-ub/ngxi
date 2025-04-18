import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagHaitiIcon],svg[openmoji-flag-haiti-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e50a0" d="M5 17h62v38H5z"></svg:path><svg:path fill="#d22f27" d="M5 36h62v19H5z"></svg:path><svg:path fill="#fff" d="M29 29h14v14H29z"></svg:path><svg:path fill="none" stroke="#a57939" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M36 33v8"></svg:path><svg:path fill="none" stroke="#a57939" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m40 37l-4 4m-4-4l4 4"></svg:path><svg:path fill="none" stroke="#5c9e31" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M33 32h6"></svg:path><svg:path fill="#5c9e31" d="M29 41h14v2H29z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagHaitiIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
