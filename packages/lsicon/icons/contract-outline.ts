import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconContractOutlineIcon],svg[lsicon-contract-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M7 14.5H3.5v-13h9V7M5 4.5h6m-6 2h4m-.5 8v-2H10c0-1-1.5-4 1-4s1 3 1 4h1.5v2z"></svg:path>`,
})
export class LsiconContractOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
