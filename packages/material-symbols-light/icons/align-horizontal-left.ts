import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAlignHorizontalLeftIcon],svg[material-symbols-light-align-horizontal-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.77 21V3h1v18zm3.576-4.692v-2.039h6.885v2.039zm0-6.577V7.692h12.885v2.039z"></svg:path>`,
})
export class MaterialSymbolsLightAlignHorizontalLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
