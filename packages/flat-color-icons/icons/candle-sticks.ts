import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsCandleSticksIcon],svg[flat-color-icons-candle-sticks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#546E7A" d="M38 4h2v20h-2zM15 7h2v17h-2zM8 27h2v17H8zm20-8h2v22h-2z"></svg:path><svg:path fill="#4CAF50" d="M36 7h6c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2h-6c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2m-23 3h6c1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2h-6c-1.1 0-2-.9-2-2v-7c0-1.1.9-2 2-2"></svg:path><svg:path fill="#F44336" d="M6 30h6c1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-7c0-1.1.9-2 2-2m20-8h6c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2h-6c-1.1 0-2-.9-2-2V24c0-1.1.9-2 2-2"></svg:path>`,
})
export class FlatColorIconsCandleSticksIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
