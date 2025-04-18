import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackOffOutlineSharpIcon],svg[material-symbols-stack-off-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 19.15l-2-2V10h-7.15l-2-2H22zM14 6V4H6.85l-2-2H16v4zm-4 14h7.15L10 12.85zm10.575 3.425L19.15 22H8V10.85l-4-4V14h2v2H2V4.85L.575 3.425L2 2l20 20zm-7-7"></svg:path>`,
})
export class MaterialSymbolsStackOffOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
