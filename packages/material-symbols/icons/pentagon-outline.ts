import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPentagonOutlineIcon],svg[material-symbols-pentagon-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.45 19h9.1l3.075-9.225L12 4.45L4.375 9.775zM6 21L2 9l10-7l10 7l-4 12zm6-9.275"></svg:path>`,
})
export class MaterialSymbolsPentagonOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
