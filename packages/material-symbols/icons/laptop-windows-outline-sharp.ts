import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLaptopWindowsOutlineSharpIcon],svg[material-symbols-laptop-windows-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 20v-2h4v-1H2V3h20v14h-2v1h4v2zm4-5h16V5H4zm0 0V5z"></svg:path>`,
})
export class MaterialSymbolsLaptopWindowsOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
