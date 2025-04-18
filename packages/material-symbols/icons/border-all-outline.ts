import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBorderAllOutlineIcon],svg[material-symbols-border-all-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h18v18zm16-2v-6h-6v6zm0-14h-6v6h6zM5 5v6h6V5zm0 14h6v-6H5z"></svg:path>`,
})
export class MaterialSymbolsBorderAllOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
