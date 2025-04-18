import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMailOffOutlineSharpIcon],svg[material-symbols-mail-off-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.775 22.625L17.15 20H2V4h2l2 2H4v12h11.15L1.375 4.225L2.8 2.8l18.4 18.4zM22 19.15l-2-2V8l-5.625 3.525L13.15 10.3L20 6H8.85l-2-2H22z"></svg:path>`,
})
export class MaterialSymbolsMailOffOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
