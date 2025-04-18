import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsUniversalCurrencyIcon],svg[material-symbols-universal-currency-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 19V5h20v14zm3-5h3q.425 0 .713-.288T9 13v-1.75q0-.425-.288-.712T8 10.25H6.5V9.5H9V8H5v3.75h2.5v.75H5zm6 2h8v-.55q0-1.125-1.1-1.787T15 13t-2.9.663T11 15.45zm4-4q.825 0 1.413-.587T17 10t-.587-1.412T15 8t-1.412.588T13 10t.588 1.413T15 12"></svg:path>`,
})
export class MaterialSymbolsUniversalCurrencyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
