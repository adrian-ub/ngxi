import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLocalMallOutlineSharpIcon],svg[material-symbols-local-mall-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 22V6h4q0-2.075 1.463-3.537T12 1t3.538 1.463T17 6h4v16zm2-2h14V8H5zm7-6q2.075 0 3.538-1.463T17 9h-2q0 1.25-.875 2.125T12 12t-2.125-.875T9 9H7q0 2.075 1.463 3.538T12 14M9 6h6q0-1.25-.875-2.125T12 3t-2.125.875T9 6M5 20V8z"></svg:path>`,
})
export class MaterialSymbolsLocalMallOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
