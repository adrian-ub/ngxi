import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagNiueIcon],svg[openmoji-flag-niue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fcea2b" d="M5 17h62v38H5z"></svg:path><svg:path fill="#1e50a0" d="M5 17h31v19H5z"></svg:path><svg:path fill="#fff" d="M9.887 18H6v2.332L32.113 36H36v-2.332z"></svg:path><svg:path fill="#fff" d="M36 20.332V18h-3.887L6 33.668V36h3.887z"></svg:path><svg:path fill="#fff" d="M6 24h30v6H6z"></svg:path><svg:path fill="#fff" d="M18 18h6v18h-6z"></svg:path><svg:path fill="#d22f27" d="M20 18h2v18h-2z"></svg:path><svg:path fill="#d22f27" d="M6 26h30v2H6zm30 7.668L29.887 30H26l10 6zM36 18h-3.887L24 22.868V24h2zM6 20.332L12.113 24H16L6 18zM6 36h3.887L18 31.132V30h-2z"></svg:path><svg:circle cx="20.5" cy="26.5" r="2.5" fill="#1e50a0"></svg:circle><svg:path fill="#fcea2b" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" d="m19.531 28l.995-3l.859 2.954L19 26.174l3-.074z"></svg:path><svg:circle cx="27" cy="26.5" r="1" fill="#fcea2b"></svg:circle><svg:circle cx="14" cy="26.5" r="1" fill="#fcea2b"></svg:circle><svg:circle cx="20.5" cy="32" r="1" fill="#fcea2b"></svg:circle><svg:circle cx="20.5" cy="21" r="1" fill="#fcea2b"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagNiueIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
