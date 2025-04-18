import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLaptopWindowsOutlineSharpIcon],svg[material-symbols-light-laptop-windows-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 18.77v-1h3.616V17H3V5h18v12h-1.616v.77H23v1zM4 16h16V6H4zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsLightLaptopWindowsOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
