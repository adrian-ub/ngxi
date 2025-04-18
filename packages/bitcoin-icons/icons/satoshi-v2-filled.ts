import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsSatoshiV2FilledIcon],svg[bitcoin-icons-satoshi-v2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.75 18.5V21h-1.5v-2.5zM17 16.75H7v-1.5h10zm0-4H7v-1.5h10zm0-4H7v-1.5h10zM12.75 3v2.5h-1.5V3z" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsSatoshiV2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
