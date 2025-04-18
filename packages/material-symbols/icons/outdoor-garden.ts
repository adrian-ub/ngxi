import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsOutdoorGardenIcon],svg[material-symbols-outdoor-garden-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 21h6V6L5 3L2 6zm7 0h6V6l-3-3l-3 3zm7 0h6V6l-3-3l-3 3z"></svg:path>`,
})
export class MaterialSymbolsOutdoorGardenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
