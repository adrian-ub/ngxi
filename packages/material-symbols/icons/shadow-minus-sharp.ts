import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsShadowMinusSharpIcon],svg[material-symbols-shadow-minus-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22V6h4V2h16v16h-4v4zm6-6h12V4H8zm2-5V9h8v2z"></svg:path>`,
})
export class MaterialSymbolsShadowMinusSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
