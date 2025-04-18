import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagBelizeIcon],svg[openmoji-flag-belize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e50a0" d="M5.083 17h62v38h-62z"></svg:path><svg:path fill="#d22f27" d="M5.083 49h62v6h-62zM5 17h62v6H5z"></svg:path><svg:circle cx="36.083" cy="36" r="9" fill="#fff"></svg:circle><svg:circle cx="36.083" cy="36" r="7.5" fill="#fff" stroke="#5c9e31" stroke-miterlimit="10"></svg:circle><svg:path fill="#fcea2b" d="M38.583 38.5h-2.5V33h3z"></svg:path><svg:path fill="#61b2e4" stroke="#61b2e4" stroke-linecap="round" stroke-linejoin="round" d="M36.083 41a4.95 4.95 0 0 0 2.588-2.23L36 36.1l-2.558 2.558A4.9 4.9 0 0 0 36.083 41"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M36.083 41s3-1 3-4v-4h-6v4c0 3 3 4 3 4"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.083 17h62v38h-62z"></svg:path>`,
})
export class OpenmojiFlagBelizeIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
