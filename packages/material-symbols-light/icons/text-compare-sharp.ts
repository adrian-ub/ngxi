import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTextCompareSharpIcon],svg[material-symbols-light-text-compare-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 22.23V20H4V4h7V1.77h1v20.46zM14.192 5V4h6v16h-6v-1h5V5zm0 7.5v-1h3.5v1zm0-3.5V8h3.5v1zM7.5 16H11v-1H7.5zm0-3.5H11v-1H7.5zm0-3.5H11V8H7.5z"></svg:path>`,
})
export class MaterialSymbolsLightTextCompareSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
