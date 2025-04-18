import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBorderAllOutlineIcon],svg[material-symbols-light-border-all-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V4h16v16zm15-1v-6.5h-6.5V19zm0-14h-6.5v6.5H19zM5 5v6.5h6.5V5zm0 14h6.5v-6.5H5z"></svg:path>`,
})
export class MaterialSymbolsLightBorderAllOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
