import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiTrueSouthAntarcticaFlagIcon],svg[openmoji-true-south-antarctica-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFF" d="M5 17.08h62v38H5z"></svg:path><svg:path fill="#1E50A0" stroke="#1E50A0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17.08h62v19H46.333L36 51.191L25.667 36.08H5z"></svg:path><svg:path fill="#FFF" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m36 21.468l9.833 15.111L36 40.357l-9.833-3.778z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiTrueSouthAntarcticaFlagIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
