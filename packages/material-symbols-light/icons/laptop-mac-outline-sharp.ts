import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLaptopMacOutlineSharpIcon],svg[material-symbols-light-laptop-mac-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 19.27V18h2.77L3 17.23V4h18v13.23l-.77.77H23v1.27zm11-.5q.262 0 .439-.178q.176-.176.176-.438t-.177-.439t-.438-.177t-.438.177t-.177.439t.177.438t.438.177M4 17h16V5H4zm0 0V5z"></svg:path>`,
})
export class MaterialSymbolsLightLaptopMacOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
