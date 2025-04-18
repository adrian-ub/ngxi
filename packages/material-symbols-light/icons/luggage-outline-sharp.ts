import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLuggageOutlineSharpIcon],svg[material-symbols-light-luggage-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.462 20H5.845V6.385h3.77V3h4.769v3.385h3.769V20h-1.616v.23q0 .31-.23.54t-.539.23t-.54-.23t-.229-.54V20H9v.23q0 .31-.23.54t-.54.23t-.539-.23t-.23-.54zm-.616-1h10.308V7.385H6.846zm2.77-1.77h1V9.155h-1zm3.768 0h1V9.155h-1zM10.616 6.385h2.769V4h-2.77zM12 13.192"></svg:path>`,
})
export class MaterialSymbolsLightLuggageOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
