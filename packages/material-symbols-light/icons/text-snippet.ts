import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTextSnippetIcon],svg[material-symbols-light-text-snippet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.616 20q-.667 0-1.141-.475T4 18.386V5.615q0-.666.475-1.14T5.615 4h9.174L20 9.211v9.173q0 .667-.475 1.141t-1.14.475zM7.5 16h9v-1h-9zm0-3.5h9v-1h-9zm0-3.5h5.73V8H7.5z"></svg:path>`,
})
export class MaterialSymbolsLightTextSnippetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
