import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyArdrIcon],svg[cryptocurrency-ardr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16m-.117-14.81L12.5 23l5.152-3.498zM16 6L6 23h5.455l7.272-12.526zm0 9.842L21.455 23H26l-6.364-9.842z"></svg:path>`,
})
export class CryptocurrencyArdrIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
