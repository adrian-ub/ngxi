import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsToolsPhillipsOutlineIcon],svg[material-symbols-tools-phillips-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 21v-2h10v2zm0-3V8l3.75-5h2.5L17 8v10zm2-2h6v-2.175l-3-3l-3 3zm0-5l2-2V6L9 8.675zm6 0V8.675L13 6v3zm0 5H9z"></svg:path>`,
})
export class MaterialSymbolsToolsPhillipsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
