import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyAeurIcon],svg[cryptocurrency-aeur-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16m-.048-13.014h.093l.004.014a.049.049 0 1 1-.097-.014m-6.014-3.493a6.993 6.993 0 0 0 6.055 10.493a7 7 0 0 0 6.993-6.993a6.96 6.96 0 0 0-.94-3.503a6.993 6.993 0 1 0-12.11.003zM16.048 12h-.097a.05.05 0 0 1 .049-.05a.055.055 0 0 1 .049.05z"></svg:path>`,
})
export class CryptocurrencyAeurIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
