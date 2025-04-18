import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsMilkOutlineIcon],svg[bitcoin-icons-milk-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M14.054 5.985a.94.94 0 0 0-.836-.485h-2.402a.96.96 0 0 0-.865.526c-.566 1.134-1.83 3.877-1.943 5.97a.004.004 0 0 1-.004.004a.004.004 0 0 0-.004.004V18.5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-6.497L15.997 12l-.003-.003c-.1-2.39-1.368-4.965-1.94-6.012Z"></svg:path><svg:rect width="6" height="2" x="9" y="3.5" rx=".5"></svg:rect><svg:path stroke-linecap="round" d="M10 12.5V18"></svg:path></svg:g>`,
})
export class BitcoinIconsMilkOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
