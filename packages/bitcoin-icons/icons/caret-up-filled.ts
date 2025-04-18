import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsCaretUpFilledIcon],svg[bitcoin-icons-caret-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.248 8.237a.25.25 0 0 0-.354 0L5.53 14.601a.75.75 0 1 1-1.06-1.06l6.363-6.364a1.75 1.75 0 0 1 2.475 0l6.364 6.364a.75.75 0 0 1-1.06 1.06z" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsCaretUpFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
