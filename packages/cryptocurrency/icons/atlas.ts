import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyAtlasIcon],svg[cryptocurrency-atlas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16S7.163 0 16 0m2.5 21.312h-5L16 26.25zM16.64 6.25h-1.28c-.325 0-.417.19-.564.448l-7.22 15.544c-.206.442.028.551.451.551l2.953-.001c.325 0 .402-.247.55-.551L16 12.748l4.47 9.493c.148.304.225.55.55.55l2.953.002c.423 0 .657-.109.451-.55l-7.22-15.545c-.148-.258-.24-.448-.565-.448z"></svg:path>`,
})
export class CryptocurrencyAtlasIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
