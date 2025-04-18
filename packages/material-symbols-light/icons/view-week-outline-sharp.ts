import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightViewWeekOutlineSharpIcon],svg[material-symbols-light-view-week-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18h4.673V6H4zm5.673 0h4.654V6H9.673zm5.654 0H20V6h-4.673zM21 19H3V5h18z"></svg:path>`,
})
export class MaterialSymbolsLightViewWeekOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
