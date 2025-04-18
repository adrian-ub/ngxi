import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightExpansionPanelsOutlineSharpIcon],svg[material-symbols-light-expansion-panels-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17.308L15.308 14l-.714-.713L12 15.88l-2.594-2.594l-.714.713zm-2.594-6.594L12 8.119l2.594 2.594l.714-.713L12 6.692L8.692 10zM4 20V4h16v16zm1-1h14V5H5zm0 0V5z"></svg:path>`,
})
export class MaterialSymbolsLightExpansionPanelsOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
