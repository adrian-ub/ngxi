import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNearbySharpIcon],svg[material-symbols-nearby-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16.4L7.6 12L12 7.6l4.4 4.4zm0 6.375L1.225 12L12 1.225L22.775 12zm0-3.575l7.2-7.2L12 4.8L4.8 12z"></svg:path>`,
})
export class MaterialSymbolsNearbySharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
