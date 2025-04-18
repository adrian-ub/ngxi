import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightViewListOutlineSharpIcon],svg[material-symbols-light-view-list-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 18H20v-3.175H8.5zM4 9.175h3.5V6H4zm0 4.675h3.5v-3.675H4zM4 18h3.5v-3.175H4zm4.5-4.15H20v-3.675H8.5zm0-4.675H20V6H8.5zM3 19V5h18v14z"></svg:path>`,
})
export class MaterialSymbolsLightViewListOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
