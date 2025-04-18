import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAlignHorizontalRightIcon],svg[material-symbols-light-align-horizontal-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.23 21V3h1v18zm-9.46-4.692v-2.039h6.884v2.039zm-6-6.577V7.692h12.884v2.039z"></svg:path>`,
})
export class MaterialSymbolsLightAlignHorizontalRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
