import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiEsperantoFlagIcon],svg[openmoji-esperanto-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#5c9e31" d="M5 17h62v38H5z"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M6 18h18v18H6z"></svg:path><svg:path fill="#5c9e31" fill-rule="evenodd" stroke="#5c9e31" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.087" d="m15.11 21.88l1.551 4.147l4.423.193l-3.465 2.756l1.183 4.266L15.11 30.8l-3.692 2.443l1.183-4.266l-3.465-2.756l4.423-.193z" transform="matrix(.9199 0 0 .9196 1.096 1.101)"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiEsperantoFlagIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
