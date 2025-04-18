import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagBurundiIcon],svg[openmoji-flag-burundi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M5 17h62v38H5z"></svg:path><svg:path fill="#d22f27" d="M63.173 17H8.827L36 33.654zm0 38L36 38.346L8.827 55z"></svg:path><svg:path fill="#5c9e31" d="M67 19.346L39.827 36L67 52.654zM5 52.654L32.173 36L5 19.346z"></svg:path><svg:circle cx="36" cy="36" r="10" fill="#fff"></svg:circle><svg:circle cx="36" cy="31" r="2" fill="#d22f27"></svg:circle><svg:circle cx="40.33" cy="38.5" r="2" fill="#d22f27"></svg:circle><svg:circle cx="31.67" cy="38.5" r="2" fill="#d22f27"></svg:circle><svg:path fill="none" d="M31.67 38.5L36 36m4.33 2.5L36 36"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagBurundiIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
