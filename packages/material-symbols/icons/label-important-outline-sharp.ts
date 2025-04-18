import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLabelImportantOutlineSharpIcon],svg[material-symbols-label-important-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 20l6-8l-6-8h14l6 8l-6 8zm4-2h9l4.5-6L15 6H6l4.5 6zm6.75-6"></svg:path>`,
})
export class MaterialSymbolsLabelImportantOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
