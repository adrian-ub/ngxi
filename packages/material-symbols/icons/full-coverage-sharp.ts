import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFullCoverageSharpIcon],svg[material-symbols-full-coverage-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 21V7h2v12h15v2zm4-4V3h17v14zm4-5h4V7h-4zm5 0h4v-2h-4zm0-3h4V7h-4z"></svg:path>`,
})
export class MaterialSymbolsFullCoverageSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
