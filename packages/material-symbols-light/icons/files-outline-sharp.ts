import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFilesOutlineSharpIcon],svg[material-symbols-light-files-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V7h6.942l2-2H21v14zm2.114-5.77h6.117V7.115zM4 12.943L8.942 8H4zm0 1.289V18h16V6h-7.77v8.23zm7.5-2.731"></svg:path>`,
})
export class MaterialSymbolsLightFilesOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
