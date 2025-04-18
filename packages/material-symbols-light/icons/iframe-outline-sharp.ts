import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightIframeOutlineSharpIcon],svg[material-symbols-light-iframe-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.192 13.808h5.616v-2.616h-5.616zm-.884.884v-4.384h7.384v4.384zM3 19V5h18v14zm1-1h16V8H4z"></svg:path>`,
})
export class MaterialSymbolsLightIframeOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
