import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPrintErrorSharpIcon],svg[material-symbols-print-error-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 21q-.425 0-.712-.288T18 20t.288-.712T19 19t.713.288T20 20t-.288.713T19 21m-1-4v-5h2v5zM6 21v-4H2V8h19.825v2H16v5H8v4h8v2zM6 7V3h12v4z"></svg:path>`,
})
export class MaterialSymbolsPrintErrorSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
