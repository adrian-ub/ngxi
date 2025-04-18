import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMimoDisconnectSharpIcon],svg[material-symbols-light-mimo-disconnect-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.462 21.492l-3.8-3.8h-.623l.769.77V20H7.192v-1.538l.77-.77H3V4.041h1.425l-.192 1.223l-2.456-2.456l.708-.708l18.684 18.685zm-.012-4.257L7.158 4H21v13.235z"></svg:path>`,
})
export class MaterialSymbolsLightMimoDisconnectSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
