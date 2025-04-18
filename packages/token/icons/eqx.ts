import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenEqxIcon],svg[token-eqx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h18v2.571H5.571V18.43h10.286V21zm15.429-10.928H7.5V7.5H21V21h-2.572v-5.786H7.5v-2.571h10.929z"></svg:path>`,
})
export class TokenEqxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
