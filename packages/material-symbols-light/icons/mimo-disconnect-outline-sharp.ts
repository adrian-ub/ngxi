import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMimoDisconnectOutlineSharpIcon],svg[material-symbols-light-mimo-disconnect-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.192 20v-1.538l.77-.77H3V4.041h1.425l.96.959H4v11.692h11.7L1.777 2.808l.708-.708l18.684 18.685l-.707.707l-3.723-3.8h-.7l.769.77V20zm13.374-2.766L20 16.67V5H8.158l-1-1H21v13.235zm-10.87-6.507"></svg:path>`,
})
export class MaterialSymbolsLightMimoDisconnectOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
