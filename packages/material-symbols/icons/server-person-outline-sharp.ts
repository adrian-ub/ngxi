import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsServerPersonOutlineSharpIcon],svg[material-symbols-server-person-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22V2h16v20h-5l-1-2h-4l-1 2zm2-2h1.75l1-2h6.5l1 2H18V4H6zm2-5h8v-.55q0-1.3-1.25-1.875T12 12t-2.75.575T8 14.45zm4-4q.825 0 1.413-.587T14 9t-.587-1.412T12 7t-1.412.588T10 9t.588 1.413T12 11m0 1"></svg:path>`,
})
export class MaterialSymbolsServerPersonOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
