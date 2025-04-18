import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEarbudCaseSharpIcon],svg[material-symbols-light-earbud-case-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11.577v5.115q0 1.365.972 2.336q.971.972 2.336.972h9.365q1.373 0 2.35-.963T20 16.692v-5.115h-3.75v3.75h-8.5v-3.75zm4.75 0v2.75h6.5v-2.75zm-4.75-1h16v-3.25q0-1.372-.977-2.35T16.673 4H7.308q-1.381 0-2.344.977T4 7.327z"></svg:path>`,
})
export class MaterialSymbolsLightEarbudCaseSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
