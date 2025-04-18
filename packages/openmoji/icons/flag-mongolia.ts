import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagMongoliaIcon],svg[openmoji-flag-mongolia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e50a0" d="M5.227 17h62v38h-62z"></svg:path><svg:path fill="#d22f27" d="M5.227 17h21v38h-21zm41 0h21v38h-21z"></svg:path><svg:circle cx="16" cy="29" r="1" fill="#fcea2b" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:circle cx="16" cy="41" r="1" fill="#fcea2b" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:path fill="#fcea2b" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 24a1 1 0 0 1-2 0l1-1Zm-2 9h2l-1 1zm0 15h2l-1 1zm0-11h2m-2 8h2m-6-12h1v16h-1zm9 0h1v16h-1z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagMongoliaIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
