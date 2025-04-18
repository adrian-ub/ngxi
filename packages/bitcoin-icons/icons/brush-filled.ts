import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsBrushFilledIcon],svg[bitcoin-icons-brush-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 5H5v6h14V5h-2.5v3a.5.5 0 0 1-1 0V5H14v4.5a.5.5 0 0 1-1 0V5H8.5v2a.5.5 0 0 1-1 0zM5 13v-1h14v1a2 2 0 0 1-2 2h-3v3a2 2 0 1 1-4 0v-3H7a2 2 0 0 1-2-2"></svg:path>`,
})
export class BitcoinIconsBrushFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
