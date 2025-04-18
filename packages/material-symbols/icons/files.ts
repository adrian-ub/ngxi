import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilesIcon],svg[material-symbols-files-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18v-3h9q.825 0 1.413-.587T13 13V4h7q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm-2-6V8q0-.825.588-1.412T4 6h6zm3.825-1L11 7.825V13z"></svg:path>`,
})
export class MaterialSymbolsFilesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
