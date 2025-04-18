import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsQuestionCircleOutlineIcon],svg[bitcoin-icons-question-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="12" cy="12" r="8.5"></svg:circle><svg:path stroke-linecap="round" d="M9 10c0-1.358 1.15-3 3-3s3 1.596 3 3c0 2.175-3 2.059-3 4.5m0 3v-1"></svg:path></svg:g>`,
})
export class BitcoinIconsQuestionCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
