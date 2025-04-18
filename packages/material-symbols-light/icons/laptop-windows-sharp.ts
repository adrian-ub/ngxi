import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLaptopWindowsSharpIcon],svg[material-symbols-light-laptop-windows-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 18.77v-1h3.616V17H3V5h18v12h-1.616v.77H23v1z"></svg:path>`,
})
export class MaterialSymbolsLightLaptopWindowsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
