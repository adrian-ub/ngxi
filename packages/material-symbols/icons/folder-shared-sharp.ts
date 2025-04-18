import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderSharedSharpIcon],svg[material-symbols-folder-shared-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20V4h8l2 2h10v14zm9-3h8v-.55q0-1.125-1.1-1.787T15 14t-2.9.663T11 16.45zm4-4q.825 0 1.413-.587T17 11t-.587-1.412T15 9t-1.412.588T13 11t.588 1.413T15 13"></svg:path>`,
})
export class MaterialSymbolsFolderSharedSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
