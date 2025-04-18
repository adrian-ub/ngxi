import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightExposurePlus1Icon],svg[material-symbols-light-exposure-plus-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 16.385v-3h-3v-1h3v-3h1v3h3v1h-3v3zm9.827 1.576V7.474l-2.53 1.766l-.574-.827l3.37-2.373h.791v11.923z"></svg:path>`,
})
export class MaterialSymbolsLightExposurePlus1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
