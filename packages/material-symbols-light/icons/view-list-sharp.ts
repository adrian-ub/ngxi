import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightViewListSharpIcon],svg[material-symbols-light-view-list-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 19H21v-4.02H8.5zM3 9.02h4.5V5H3zM3 14h4.5v-3.98H3zm0 5h4.5v-4.02H3zm5.5-5H21v-3.98H8.5zm0-4.98H21V5H8.5z"></svg:path>`,
})
export class MaterialSymbolsLightViewListSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
