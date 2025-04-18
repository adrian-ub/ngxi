import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsTagOutlineIcon],svg[bitcoin-icons-tag-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="m5.927 13.177l4.896 4.896a.25.25 0 0 0 .354 0l6.25-6.25a.25.25 0 0 0 .073-.177V8.104l-.002-.03L17.5 8a1.5 1.5 0 0 0-1.574-1.498l-.03-.002h-3.543a.25.25 0 0 0-.176.073l-6.25 6.25a.25.25 0 0 0 0 .354Z"></svg:path><svg:path stroke-linecap="round" d="M11.5 15v-4.5"></svg:path><svg:path d="M9.854 12.396a.5.5 0 1 1-.708.708a.5.5 0 0 1 .708-.708Zm4 0a.5.5 0 1 1-.708.708a.5.5 0 0 1 .708-.708Z"></svg:path></svg:g>`,
})
export class BitcoinIconsTagOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
