import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedOltIcon],svg[token-branded-olt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#008D9F" d="m7.781 3l3.654 2.11v4.218l-3.654 2.11l-3.653-2.11V5.11z"></svg:path><svg:path fill="#00F1D0" d="m7.781 12.563l3.654 2.109v4.218L7.78 21l-3.653-2.11v-4.218zM16.22 3l3.653 2.11v4.218l-3.653 2.11l-3.654-2.11V5.11z"></svg:path><svg:path fill="#008D9F" d="m16.218 12.563l3.653 2.109v4.219L16.218 21l-3.653-2.11v-4.218z"></svg:path></svg:g>`,
})
export class TokenBrandedOltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
