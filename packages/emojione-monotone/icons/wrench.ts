import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneWrenchIcon],svg[emojione-monotone-wrench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M58.457 41.357a12.08 12.08 0 0 0-11.412-3.2L25.841 16.958A12.09 12.09 0 0 0 22.642 5.54c-3.096-3.096-7.451-4.158-11.413-3.199l8.258 8.26l-1.878 7.007l-7.009 1.879l-8.258-8.26a12.08 12.08 0 0 0 3.201 11.415a12.08 12.08 0 0 0 11.412 3.2l21.204 21.2a12.09 12.09 0 0 0 3.199 11.418c3.096 3.096 7.451 4.158 11.413 3.199l-8.259-8.261l1.878-7.007l7.01-1.879l8.256 8.26a12.07 12.07 0 0 0-3.199-11.415"></svg:path>`,
})
export class EmojioneMonotoneWrenchIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
