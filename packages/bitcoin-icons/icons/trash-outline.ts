import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsTrashOutlineIcon],svg[bitcoin-icons-trash-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M6.6 6.91L8.4 20h7.2l1.8-13.09"></svg:path><svg:path stroke-linecap="round" d="M6 6.667h12"></svg:path><svg:path d="M14.571 7V6a2 2 0 0 0-2-2H11.43a2 2 0 0 0-2 2v1"></svg:path><svg:path stroke-linecap="round" d="M11.98 10.546v5.819m-2.38-5.82l.6 5.82m4.2-5.819l-.6 5.819"></svg:path></svg:g>`,
})
export class BitcoinIconsTrashOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
