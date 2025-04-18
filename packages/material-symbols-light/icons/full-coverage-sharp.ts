import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFullCoverageSharpIcon],svg[material-symbols-light-full-coverage-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20V8h1v11h14v1zm4-4V4h15v12zm3-4h4V7h-4zm5 0h4v-2h-4zm0-3h4V7h-4z"></svg:path>`,
})
export class MaterialSymbolsLightFullCoverageSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
