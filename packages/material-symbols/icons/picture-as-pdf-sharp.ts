import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPictureAsPdfSharpIcon],svg[material-symbols-picture-as-pdf-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 12.5h1v-2h1.5l.5-.5V8l-.5-.5H9zm1-3v-1h1v1zm3 3h2.5l.5-.5V8l-.5-.5H13zm1-1v-3h1v3zm3 1h1v-2h1v-1h-1v-1h1v-1h-2zM6 18V2h16v16zm-4 4V6h2v14h14v2z"></svg:path>`,
})
export class MaterialSymbolsPictureAsPdfSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
