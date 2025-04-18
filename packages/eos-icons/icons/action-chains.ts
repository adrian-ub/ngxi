import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsActionChainsIcon],svg[eos-icons-action-chains-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="20.01" cy="20.01" r="3" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M18 3H6.83a3 3 0 1 0 0 2H18a3 3 0 0 1 0 6h-3.17a3 3 0 0 0-5.64 0H6a5 5 0 0 0 0 10h6v3l4-4l-4-4v3H6a3 3 0 1 1 0-6h3.2a3 3 0 0 0 5.63 0H18a5 5 0 0 0 0-10"></svg:path>`,
})
export class EosIconsActionChainsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
