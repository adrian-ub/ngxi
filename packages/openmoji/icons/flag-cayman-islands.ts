import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagCaymanIslandsIcon],svg[openmoji-flag-cayman-islands-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e50a0" d="M5 17h62v38H5z"></svg:path><svg:path fill="#fff" d="M9.887 18H6v2.332L32.113 36H36v-2.332z"></svg:path><svg:path fill="#fff" d="M36 20.332V18h-3.887L6 33.668V36h3.887z"></svg:path><svg:path fill="#fff" d="M6 24h30v6H6z"></svg:path><svg:path fill="#fff" d="M18 18h6v18h-6z"></svg:path><svg:path fill="#d22f27" d="M20 18h2v18h-2z"></svg:path><svg:path fill="#d22f27" d="M6 26h30v2H6zm30 7.668L29.887 30H26l10 6zM36 18h-3.887L24 22.868V24h2zM6 20.332L12.113 24H16L6 18zM6 36h3.887L18 31.132V30h-2z"></svg:path><svg:circle cx="51" cy="39" r="5" fill="#61b2e4"></svg:circle><svg:path fill="#d22f27" d="M46 32h10v4H46z"></svg:path><svg:path fill="#61b2e4" d="M46 36h10v3H46z"></svg:path><svg:path fill="none" stroke="#fcea2b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="m54.25 42.25l2 2m-8.5-2l-2 2"></svg:path><svg:path fill="none" stroke="#fcea2b" stroke-miterlimit="10" stroke-width="2" d="M55.25 43.235a6 6 0 0 1-8.493.008"></svg:path><svg:circle cx="51" cy="26" r="1" fill="none" stroke="#fcea2b" stroke-miterlimit="10" stroke-width="2"></svg:circle><svg:path fill="none" stroke="#5c9e31" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M54 29c0-.552-1.343-1-3-1s-3 .448-3 1Z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagCaymanIslandsIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
