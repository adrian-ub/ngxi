import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyShiftIcon],svg[cryptocurrency-shift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.52 16.42l4.478-4.478L16.056 3l-8.937 8.937H16l-.002.002H7.057l4.472 4.471l.026-.026l.006.006l-4.49 4.488l8.943 8.943l8.943-8.943h-8.895h8.915l-4.456-4.459zm-4.471 4.457h-.014l.007-.006l-.007.006zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16"></svg:path>`,
})
export class CryptocurrencyShiftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
