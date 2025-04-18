import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSystemUpdateAltSharpIcon],svg[material-symbols-light-system-update-alt-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V5h5.73v1H4v12h16V6h-4.73V5H21v14zm9-4.1l-4.308-4.308l.708-.707l3.1 3.1V5h1v7.985l3.1-3.1l.708.707z"></svg:path>`,
})
export class MaterialSymbolsLightSystemUpdateAltSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
