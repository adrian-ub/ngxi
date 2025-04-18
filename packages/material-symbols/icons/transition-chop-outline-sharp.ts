import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTransitionChopOutlineSharpIcon],svg[material-symbols-transition-chop-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20V4h20v16zm2-3.45l11.55-3L13.6 6H4zM6.375 18H20V6h-4.325L18 15zM4 6"></svg:path>`,
})
export class MaterialSymbolsTransitionChopOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
