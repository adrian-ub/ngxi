import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laSortAmountDownIcon],svg[la-sort-amount-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v2h12V5zm17 0v18.688l-2.594-2.594L17 22.5l4.281 4.313l.719.687l.719-.688L27 22.5l-1.406-1.406L23 23.687V5zM4 9v2h10V9zm0 4v2h8v-2zm0 4v2h6v-2zm0 4v2h4v-2zm0 4v2h2v-2z"></svg:path>`,
})
export class LaSortAmountDownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
