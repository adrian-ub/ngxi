import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFileCopyOffOutlineSharpIcon],svg[material-symbols-light-file-copy-off-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 17.246l-1-1V7h-4V3H8v2.112l-1-1V2h8.5L20 6.5zM8 17h7.585L8 9.416zm12.654 5.07L16.584 18H7V8.416l-5.07-5.07l.708-.708l18.723 18.723zM3 22V9h1v12h11v1z"></svg:path>`,
})
export class MaterialSymbolsLightFileCopyOffOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
