import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSmartCardReaderOffSharpIcon],svg[material-symbols-smart-card-reader-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.475 22l-1.3-1.3H2v-5h12.175l-1.5-1.5H5V6.5L.7 2.2L2.1.8l19.8 19.775zM19 .7v13.5h-.7l-3.625-3.65q.575-.2.95-.712T16 8.675q0-.825-.587-1.4T14 6.7q-.65 0-1.162.375t-.713.95L4.825.7zM8 12.75h.575q.5 0 .925-.262t.75-.738L8 9.5z"></svg:path>`,
})
export class MaterialSymbolsSmartCardReaderOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
