import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLocalCafeOutlineSharpIcon],svg[material-symbols-light-local-cafe-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20v-1h14v1zm0-3.77V4h16v5.5h-3.692v6.73zm1-1h10.308V5H6zM17.308 8.5H20V5h-2.692zM6 15.23h10.308z"></svg:path>`,
})
export class MaterialSymbolsLightLocalCafeOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
