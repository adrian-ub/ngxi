import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAlignVerticalBottomIcon],svg[material-symbols-light-align-vertical-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20.5v-1h18v1zm4.692-3.577V3.481h2.039v13.442zm6.577 0V9.481h2.039v7.442z"></svg:path>`,
})
export class MaterialSymbolsLightAlignVerticalBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
