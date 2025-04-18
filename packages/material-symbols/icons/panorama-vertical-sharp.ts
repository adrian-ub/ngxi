import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPanoramaVerticalSharpIcon],svg[material-symbols-panorama-vertical-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.475 21.95q.875-1.875 1.45-4.5t.575-5.5t-.575-5.5t-1.45-4.5H20.5q-.875 1.875-1.437 4.5t-.563 5.5t.563 5.5t1.437 4.5z"></svg:path>`,
})
export class MaterialSymbolsPanoramaVerticalSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
