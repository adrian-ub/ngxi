import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLuggageSharpIcon],svg[material-symbols-light-luggage-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.462 20H5.845V6.385h3.77V3h4.769v3.385h3.769V20h-1.616v.23q0 .31-.23.54t-.539.23t-.54-.23t-.229-.54V20H9v.23q0 .31-.23.54t-.54.23t-.539-.23t-.23-.54zm2.154-2.77h1V9.155h-1zm3.769 0h1V9.155h-1zm-2.77-10.846h2.77V4h-2.77z"></svg:path>`,
})
export class MaterialSymbolsLightLuggageSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
