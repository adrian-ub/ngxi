import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTextCompareOutlineSharpIcon],svg[material-symbols-light-text-compare-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 22.23V20H4V4h7V1.77h1v20.46zM5 19h6v-3H7.5v-1H11v-2.5H7.5v-1H11V9H7.5V8H11V5H5zm9.192-14V4h6v16h-6v-1h5V5zm0 7.5v-1h3.5v1zm0-3.5V8h3.5v1zM11 12"></svg:path>`,
})
export class MaterialSymbolsLightTextCompareOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
