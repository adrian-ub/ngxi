import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBrowseIcon],svg[material-symbols-light-browse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 13V5.616q0-.691.463-1.153T5.616 4H11v9zm9-9h5.385q.69 0 1.152.463T20 5.622V9h-7zm0 16v-9h7v7.385q0 .69-.462 1.152T18.384 20zm-9-5h7v5H5.616q-.691 0-1.153-.462T4 18.378z"></svg:path>`,
})
export class MaterialSymbolsLightBrowseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
