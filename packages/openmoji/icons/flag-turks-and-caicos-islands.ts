import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagTurksAndCaicosIslandsIcon],svg[openmoji-flag-turks-and-caicos-islands-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e50a0" d="M5 17h62v38H5z"></svg:path><svg:path fill="#fff" d="M9.887 18H6v2.332L32.113 36H36v-2.332z"></svg:path><svg:path fill="#fff" d="M36 20.332V18h-3.887L6 33.668V36h3.887z"></svg:path><svg:path fill="#fff" d="M6 24h30v6H6z"></svg:path><svg:path fill="#fff" d="M18 18h6v18h-6z"></svg:path><svg:path fill="#d22f27" d="M20 18h2v18h-2z"></svg:path><svg:path fill="#d22f27" d="M6 26h30v2H6zm30 7.668L29.887 30H26l10 6zM36 18h-3.887L24 22.868V24h2zM6 20.332L12.113 24H16L6 18zM6 36h3.887L18 31.132V30h-2z"></svg:path><svg:path fill="#f1b31c" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.009" d="M60.73 29.091H44.618s-1.005 14.09 8.04 18.148v.016l.016-.008l.017.008v-.016c9.045-4.057 8.039-18.148 8.039-18.148"></svg:path><svg:path fill="#5c9e31" d="M49.777 42.714s0-5.045 3.027-5.045s3.028 5.045 3.028 5.045s-3.028 3.028-6.055 0"></svg:path><svg:circle cx="52.804" cy="37.669" r="1.009" fill="#d22f27" stroke="#d22f27" stroke-miterlimit="10" stroke-width="1.009"></svg:circle><svg:ellipse cx="47.889" cy="33.506" fill="#f4aa41" rx="1.514" ry="2.649" transform="rotate(-25.087 47.89 33.506)"></svg:ellipse><svg:ellipse cx="48.898" cy="33.506" fill="#ffa7c0" rx="1.514" ry="2.649"></svg:ellipse><svg:ellipse cx="56.971" cy="33.506" fill="#a57939" rx="1.514" ry="2.649"></svg:ellipse><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagTurksAndCaicosIslandsIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
