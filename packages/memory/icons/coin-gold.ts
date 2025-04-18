import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryCoinGoldIcon],svg[memory-coin-gold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19H3v-2h1v-2h1v-3h1v-2H5V7H4V5H3V3h16v2h-1v2h-1v3h-1v2h1v3h1v2h1Zm-3-2v-1h-1v-2h-1V8h1V6h1V5H6v1h1v2h1v6H7v2H6v1Z"></svg:path>`,
})
export class MemoryCoinGoldIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
