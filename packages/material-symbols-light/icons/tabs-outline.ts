import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTabsOutlineIcon],svg[material-symbols-light-tabs-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zm0-1h12.769q.23 0 .423-.192t.192-.424v-7H5v7q0 .232.192.424t.423.192M5 10.385h14v-4.77q0-.23-.192-.423T18.384 5H5.616q-.231 0-.424.192T5 5.616zM12 8h6V6h-6zm-7 2.385V5z"></svg:path>`,
})
export class MaterialSymbolsLightTabsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
