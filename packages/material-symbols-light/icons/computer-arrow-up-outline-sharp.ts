import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightComputerArrowUpOutlineSharpIcon],svg[material-symbols-light-computer-arrow-up-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.48 14.27h1V9.574l2.12 2.114l.708-.708l-3.327-3.327l-3.289 3.288l.708.714l2.08-2.081zm-9.71 5.192v-1h20.46v1zm1.23-2v-13h18v13zm1-1h16v-11H4zm0 0v-11z"></svg:path>`,
})
export class MaterialSymbolsLightComputerArrowUpOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
