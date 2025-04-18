import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsOutdoorGardenOutlineIcon],svg[material-symbols-outdoor-garden-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 21V6l4-3l3 2.25L12 3l3 2.25L18 3l4 3v15zm2-2h4V7L6 5.5L4 7zm6 0h4V7l-2-1.5L10 7zm6 0h4V7l-2-1.5L16 7z"></svg:path>`,
})
export class MaterialSymbolsOutdoorGardenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
