import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightScienceOffSharpIcon],svg[material-symbols-light-science-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 11.31l-4-4V5H8.116V4h7.769v1H14zm5.223 9.482L18.431 20H5q-.64 0-.909-.57t.128-1.065L9.9 11.47L3.17 4.74l.707-.708l16.054 16.054z"></svg:path>`,
})
export class MaterialSymbolsLightScienceOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
