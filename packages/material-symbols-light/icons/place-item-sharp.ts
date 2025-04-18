import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPlaceItemSharpIcon],svg[material-symbols-light-place-item-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V8h4.73v1H5v10h14V9h-3.73V8H20v12zm8-4.692L8.692 12l.708-.708l2.1 2.095V1.5h1v11.887l2.1-2.095l.708.708z"></svg:path>`,
})
export class MaterialSymbolsLightPlaceItemSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
