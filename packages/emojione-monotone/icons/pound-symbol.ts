import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotonePoundSymbolIcon],svg[emojione-monotone-pound-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26.842 36h8.137l2.179-8h-8.137z"></svg:path><svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m17.365 26h-6.104l-2.18 8h6.102l-1.635 6h-6.104l-1.635 6h-6.104l1.637-6h-8.139l-1.635 6h-6.104l1.637-6H13l1.635-6h6.104l2.18-8h-6.102l1.635-6h6.102l1.637-6h6.102l-1.635 6h8.137l1.637-6h6.102l-1.635 6H51z"></svg:path>`,
})
export class EmojioneMonotonePoundSymbolIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
