import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTransitionChopOutlineSharpIcon],svg[material-symbols-light-transition-chop-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V5h18v14zm1-1.815l12.185-3.212L14.119 6H4zm.817.815H20V6h-4.844l2.248 8.692zM4 6"></svg:path>`,
})
export class MaterialSymbolsLightTransitionChopOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
