import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSheetsRtlOutlineSharpIcon],svg[material-symbols-light-sheets-rtl-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 12.577v-10h14v10zm1-5.5h5.5v-3.5H6zm6.5 0H18v-3.5h-5.5zm-6.5 4.5h5.5v-3.5H6zm6.5 0H18v-3.5h-5.5zM7 20.712l-3.288-3.289L7 14.135l.708.688l-2.075 2.1H19.5v1H5.633l2.075 2.1z"></svg:path>`,
})
export class MaterialSymbolsLightSheetsRtlOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
