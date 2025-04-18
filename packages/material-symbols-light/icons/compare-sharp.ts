import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCompareSharpIcon],svg[material-symbols-light-compare-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 22.23V20H4V4h7V1.77h1v20.46zM5 18h6v-7.192zm9 2v-8l5 6V5h-5V4h6v16z"></svg:path>`,
})
export class MaterialSymbolsLightCompareSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
