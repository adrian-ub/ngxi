import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightExposureSharpIcon],svg[material-symbols-light-exposure-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V4h16v16zm1-1h14V5zm9.808-1.308v-2h-2v-.884h2v-2h.884v2h2v.884h-2v2zm-8.5-9.5h4.384v-.884H6.308z"></svg:path>`,
})
export class MaterialSymbolsLightExposureSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
