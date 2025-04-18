import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconContractAcrossOutlineIcon],svg[lsicon-contract-across-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="m5.36 5.875l2 2l3.5-3.5M7 14.5H3.5v-13h9v5m-4 8h5v-2H12v-1c0-.5 1-3-1-3s-1 2.5-1 3v1H8.5z"></svg:path>`,
})
export class LsiconContractAcrossOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
