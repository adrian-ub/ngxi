import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDataTableOutlineSharpIcon],svg[material-symbols-light-data-table-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V4h16v16zM5 8.998h14V5H5zm0 5.004h14V9.998H5zM5 19h14v-3.998H5zM6.77 7.804V6.188h1.615v1.616zm0 5.004v-1.616h1.615v1.616zm0 5.003v-1.615h1.615v1.615z"></svg:path>`,
})
export class MaterialSymbolsLightDataTableOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
