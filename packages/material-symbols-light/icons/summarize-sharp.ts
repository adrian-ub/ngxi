import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSummarizeSharpIcon],svg[material-symbols-light-summarize-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.192 8.808h1.616V7.192H7.192zm0 4h1.616v-1.616H7.192zm0 4h1.616v-1.616H7.192zM4 20V4h11.577L20 8.423V20zM15 5v4h4z"></svg:path>`,
})
export class MaterialSymbolsLightSummarizeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
