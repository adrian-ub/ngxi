import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFileCopyOffSharpIcon],svg[material-symbols-light-file-copy-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 17.246L7 4.112V2h8.5L20 6.5zm.654 4.823L16.584 18H7V8.416l-5.07-5.07l.708-.708l18.723 18.723zM15 7h4.154L15 2.846L19.154 7L15 2.846zM3 22V9h1v12h11v1z"></svg:path>`,
})
export class MaterialSymbolsLightFileCopyOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
