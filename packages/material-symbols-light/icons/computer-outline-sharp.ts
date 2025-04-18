import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightComputerOutlineSharpIcon],svg[material-symbols-light-computer-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.77 19.462v-1h20.46v1zm1.23-2v-13h18v13zm1-1h16v-11H4zm0 0v-11z"></svg:path>`,
})
export class MaterialSymbolsLightComputerOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
