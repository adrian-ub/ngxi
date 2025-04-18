import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStylusOutlineSharpIcon],svg[material-symbols-stylus-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.95 20L2.7 21.3L4 15.05zm0 0L4 15.05L16.875 2.175l4.95 4.95zm-.3-2.525L19 7.125L16.875 5L6.525 15.35z"></svg:path>`,
})
export class MaterialSymbolsStylusOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
