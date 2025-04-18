import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNoLuggageSharpIcon],svg[material-symbols-light-no-luggage-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.462 21v-1H5.845V7.267l-3.96-3.96l.714-.713l19.223 19.223l-.713.714l-3.294-3.295V20h-1.277v1H15v-1H9v1zm2.154-3.77h1v-5.193l-1-1zm3.769 0h1v-1.424l-1-1zm4.769-2.47l-3.77-3.77V9.155h-1v.837L9.617 6.22V3h4.769v3.385h3.769zm-7.538-8.375h2.769V4h-2.77z"></svg:path>`,
})
export class MaterialSymbolsLightNoLuggageSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
