import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagBrazilIcon],svg[openmoji-flag-brazil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#5c9e31" d="M5 17h62v38H5z"></svg:path><svg:path fill="#fcea2b" d="m59.023 36.023l-23.157 14.63l-22.889-14.362l23.157-14.63z"></svg:path><svg:circle cx="36" cy="36" r="9" fill="#1e50a0"></svg:circle><svg:path fill="#fff" d="M44.159 39.782a9 9 0 0 0 .696-2.26a11.474 11.474 0 0 0-17.477-4.04a9 9 0 0 0-.352 2.013a10.998 10.998 0 0 1 17.133 4.287"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagBrazilIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
