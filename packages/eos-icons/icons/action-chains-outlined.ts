import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsActionChainsOutlinedIcon],svg[eos-icons-action-chains-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3H6.834a3 3 0 1 0 0 2H18a3 3 0 0 1 0 6h-3.168a3 3 0 0 0-5.639 0H6a5 5 0 0 0 0 10h6v3l4-4l-4-4v3H6a3 3 0 0 1 0-6h3.203a3 3 0 0 0 5.629 0H18a5 5 0 0 0 0-10M4 5a1 1 0 1 1 1-1a1 1 0 0 1-1 1m8 8a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path><svg:path fill="currentColor" d="M20 17a3 3 0 1 0 3 3a3 3 0 0 0-3-3m0 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class EosIconsActionChainsOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
