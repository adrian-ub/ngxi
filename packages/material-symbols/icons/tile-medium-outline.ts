import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTileMediumOutlineIcon],svg[material-symbols-tile-medium-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19v-6h8v6zm10 0v-6h8v6zM3 11V5h18v6zm2 6h4v-2H5zm10 0h4v-2h-4zm2-1"></svg:path>`,
})
export class MaterialSymbolsTileMediumOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
