import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCarRepairOutlineSharpIcon],svg[material-symbols-light-car-repair-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 20.77v-3h-7v-1h15v1h-7v3zm-2.884-8.731q.309 0 .539-.23t.23-.54t-.23-.54t-.54-.229t-.539.23t-.23.54t.23.539t.54.23m6.769 0q.31 0 .539-.23t.23-.54t-.23-.54t-.54-.229t-.539.23t-.23.54t.23.539t.54.23M6 9.522l1.649-4.754h8.695L18 9.523v6.246h-1v-2H7v2H6zm1.304-.754h9.392l-1.046-3h-7.3zM7 9.77v3zm0 3h10v-3H7z"></svg:path>`,
})
export class MaterialSymbolsLightCarRepairOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
