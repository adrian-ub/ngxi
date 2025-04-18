import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiChipIcon],svg[mynaui-chip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M6 6H3m3 4H3m3 4H3m3 4H3M21 6h-3m3 4h-3m3 4h-3m3 4h-3"></svg:path>`,
})
export class MynauiChipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
