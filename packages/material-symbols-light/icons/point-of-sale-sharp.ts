import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPointOfSaleSharpIcon],svg[material-symbols-light-point-of-sale-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.27 8.308V3.769h11.46v4.539zm1-1h9.46V4.769H7.27zM3.77 20.23v-2.616h16.46v2.616zm0-3.385l3.134-7.538h10.192l3.135 7.538zm4.576-1.615h1.77v-.77h-1.77zm0-1.77h1.77v-.769h-1.77zm0-1.769h1.77v-.769h-1.77zm2.77 3.539h1.769v-.77h-1.77zm0-1.77h1.769v-.769h-1.77zm0-1.769h1.769v-.769h-1.77zm2.769 3.539h1.769v-.77h-1.77zm0-1.77h1.769v-.769h-1.77zm0-1.769h1.769v-.769h-1.77z"></svg:path>`,
})
export class MaterialSymbolsLightPointOfSaleSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
