import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMailOffSharpIcon],svg[material-symbols-mail-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.775 22.625L17.15 20H2V4h2l2 2H3.15L1.375 4.225L2.8 2.8l18.4 18.4zM22 19.15l-7.625-7.625L20 8V6l-6.85 4.3L6.85 4H22z"></svg:path>`,
})
export class MaterialSymbolsMailOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
