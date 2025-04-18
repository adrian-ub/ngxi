import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiBrowncoatFlagIcon],svg[openmoji-browncoat-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#5c9e31" d="M67 17H5.32v37.804H67z"></svg:path><svg:path fill="#FCEA2B" d="M5 30h62v4H5zm0 8h62v4H5z"></svg:path><svg:g stroke="#000" stroke-linejoin="round" stroke-width="2"><svg:path fill="none" stroke-linecap="round" d="M67 17H5v38h62z"></svg:path><svg:path d="m36 25l2.47 7.946h7.992l-6.466 4.911l2.47 7.947L36 40.893l-6.466 4.91l2.47-7.946l-6.466-4.91h7.992z"></svg:path></svg:g>`,
})
export class OpenmojiBrowncoatFlagIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
