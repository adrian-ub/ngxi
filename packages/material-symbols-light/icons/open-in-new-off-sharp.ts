import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightOpenInNewOffSharpIcon],svg[material-symbols-light-open-in-new-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.833 21.26L18.573 20H4V5.427l-1.26-1.26l.714-.713l17.092 17.092zM17.573 19l-5.933-5.933l-1.902 1.902l-.707-.708l1.902-1.902L5 6.427V19zM7.811 5l-1-1h4.42v1zm5.948 5.948l-.707-.707L18.292 5H14V4h6v6h-1V5.708zM20 17.188l-1-1V12.77h1z"></svg:path>`,
})
export class MaterialSymbolsLightOpenInNewOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
