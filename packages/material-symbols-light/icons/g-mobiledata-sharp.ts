import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGMobiledataSharpIcon],svg[material-symbols-light-g-mobiledata-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 16.616V7.385h7.692v1H8.5v7.23h6V12.5h-2.384v-1H15.5v5.116z"></svg:path>`,
})
export class MaterialSymbolsLightGMobiledataSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
