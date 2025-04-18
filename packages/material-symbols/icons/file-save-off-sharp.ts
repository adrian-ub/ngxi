import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFileSaveOffSharpIcon],svg[material-symbols-file-save-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.9 18.1l-1.4-1.425l1.1-1.1L22 17zM19 16.175l-2-2V13h2zM19 11h-5.175l-7-7L4.8 2H13l6 6zm-7 3.825L19.175 22H14v2h8v-2L2.1 2.1L.7 3.5L4 6.825V20h8zM17 9l-5-5zl-5-5v5z"></svg:path>`,
})
export class MaterialSymbolsFileSaveOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
