import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCastleIcon],svg[openmoji-castle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#9B9B9A" d="M30 27h12v14H30z"></svg:path><svg:path fill="#D0CFCE" d="M52 55H20V39h7v2h5v-2h8v2h5v-2h7v2v-2zM10 32h10v23H10zm42 0h10v23H52zM8 26h14v6H8zm21.5-4h13v6h-13zM50 26h14v6H50z"></svg:path><svg:path fill="#EA5A47" d="m36 12l-4.5 10h9zm-21 4L9.5 26h11zm42 0l-5.5 10h11z"></svg:path><svg:path fill="#A57939" d="M40.5 55h-9v-6a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M31 35v-7h10v7"></svg:path><svg:path d="M37 35h-2v-3a1 1 0 0 1 1-1h0m16 24H20V39h7v2h5v-2h8v2h5v-2h7v2v-2zM10 32h10v23H10zm42 0h10v23H52zM8 26h14v6H8zm21.5-4h13v6h-13zM50 26h14v6H50zM36 12l-4.5 10h9zm-21 4L9.5 26h11zm42 0l-5.5 10h11z"></svg:path><svg:path d="M40.5 55h-9v-6a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3zM36 46v9M16 40h-2v-3a1 1 0 0 1 1-1h0m43 4h-2v-3a1 1 0 0 1 1-1h0"></svg:path></svg:g>`,
})
export class OpenmojiCastleIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
