import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsChainPrintIcon],svg[pepicons-chain-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:g fill="currentColor" stroke-width="2" opacity=".8"><svg:rect width="6" height="10" x="14.784" y="3.384" rx="3" transform="rotate(33.038 14.784 3.384)"></svg:rect><svg:rect width="6" height="10" x="9.836" y="7.323" rx="3" transform="rotate(33.038 9.836 7.323)"></svg:rect></svg:g><svg:rect width="7" height="11" x="13.137" y="1.192" rx="3.5" transform="rotate(33.038 13.137 1.192)"></svg:rect><svg:rect width="7" height="11" x="8.189" y="5.131" rx="3.5" transform="rotate(33.038 8.189 5.131)"></svg:rect></svg:g>`,
})
export class PepiconsChainPrintIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
