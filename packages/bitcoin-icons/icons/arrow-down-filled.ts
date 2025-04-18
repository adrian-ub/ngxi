import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsArrowDownFilledIcon],svg[bitcoin-icons-arrow-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.013 2.25a.75.75 0 0 1 .75.75l-.012 16.19l5.72-5.708a.75.75 0 1 1 1.059 1.061l-7 6.988a.75.75 0 0 1-1.06 0l-7-6.988a.75.75 0 0 1 1.06-1.061l5.721 5.71L11.262 3a.75.75 0 0 1 .751-.75" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsArrowDownFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
