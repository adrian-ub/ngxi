import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsExposurePlus1Icon],svg[material-symbols-exposure-plus-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 17v-3H3v-2h3V9h2v3h3v2H8v3zm9.75 2V8.05l-2.3 1.65l-1.15-1.75L16.4 5H18v14z"></svg:path>`,
})
export class MaterialSymbolsExposurePlus1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
