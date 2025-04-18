import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laSortAmountUpAltIcon],svg[la-sort-amount-up-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v2h2V5zm18 .5l-.72.69L17 10.5l1.41 1.41L21 9.31V28h2V9.31l2.59 2.6L27 10.5l-4.28-4.31zM4 9v2h4V9zm0 4v2h6v-2zm0 4v2h8v-2zm0 4v2h10v-2zm0 4v2h12v-2z"></svg:path>`,
})
export class LaSortAmountUpAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
