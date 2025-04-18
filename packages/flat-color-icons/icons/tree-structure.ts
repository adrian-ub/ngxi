import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsTreeStructureIcon],svg[flat-color-icons-tree-structure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#90CAF9" d="m36.9 13.8l-1.8-3.6L7.5 24l27.6 13.8l1.8-3.6L16.5 24z"></svg:path><svg:path fill="#D81B60" d="M6 18h12v12H6z"></svg:path><svg:path fill="#2196F3" d="M30 6h12v12H30zm0 24h12v12H30z"></svg:path>`,
})
export class FlatColorIconsTreeStructureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
