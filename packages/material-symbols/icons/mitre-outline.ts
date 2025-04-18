import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMitreOutlineIcon],svg[material-symbols-mitre-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 15V9h2.5V7H13V1h7v6h-2.5v2H20v6zm2-2h3v-2h-3zm0-8h3V3h-3zM4 23v-6h2.5v-2H4V9h2.5V7H4V1h7v6H8.5v2H11v6H8.5v2H11v6zm2-2h3v-2H6zm0-8h3v-2H6zm0-8h3V3H6zm1.5-1"></svg:path>`,
})
export class MaterialSymbolsMitreOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
