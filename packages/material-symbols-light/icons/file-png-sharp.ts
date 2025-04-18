import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFilePngSharpIcon],svg[material-symbols-light-file-png-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.27 11.923v-1.73H8v1.73zm9.48 2.77h2.212l.654-.674v-1.865h-.885v1.654h-1.77v-3.616h2.655v-.884H15.75l-.673.654v4.057zm-10.365 0h.884v-1.885h2.02l.595-.616V9.904l-.596-.596H5.385zm4.884 0h.885v-3.554l1.615 3.553h.923V9.308h-.884v3.33l-1.481-3.33h-1.058zM3 19V5h18v14z"></svg:path>`,
})
export class MaterialSymbolsLightFilePngSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
