import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsBrushOutlineIcon],svg[bitcoin-icons-brush-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M18.5 5.5h-13v7a2 2 0 0 0 2 2h3V18a1.5 1.5 0 0 0 3 0v-3.5h3a2 2 0 0 0 2-2z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 11.5h12M16 6v2m-2.5-2v3.5M8 6v1"></svg:path></svg:g>`,
})
export class BitcoinIconsBrushOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
