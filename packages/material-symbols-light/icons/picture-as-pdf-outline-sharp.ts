import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPictureAsPdfOutlineSharpIcon],svg[material-symbols-light-picture-as-pdf-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.654 12.385h.769v-2h1.596l.404-.404V8.019l-.404-.404H8.654zm.769-2.77v-1.23h1.23v1.23zm3.039 2.77h2.288l.404-.404V8.019l-.404-.403h-2.289zm.769-.77v-3.23h1.154v3.23zm3.154.77h.769v-2h1.385v-.77h-1.385v-1.23h1.385v-.77h-2.154zM6.5 17V3h14v14zm1-1h12V4h-12zm-4 4V6.616h1V19h12.385v1zm4-16v12z"></svg:path>`,
})
export class MaterialSymbolsLightPictureAsPdfOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
