import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEventListOutlineSharpIcon],svg[material-symbols-light-event-list-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.616 20v-6.384H21V20zm1-1H20v-4.384h-4.384zM3 17.308v-1h8.23v1zm11.616-6.924V4H21v6.385zm1-1H20V5h-4.384zM3 7.692v-1h8.23v1zm14.808-.5"></svg:path>`,
})
export class MaterialSymbolsLightEventListOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
