import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewWeekOutlineSharpIcon],svg[material-symbols-view-week-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18h4V6H4zm6 0h4V6h-4zm6 0h4V6h-4zm6 2H2V4h20z"></svg:path>`,
})
export class MaterialSymbolsViewWeekOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
