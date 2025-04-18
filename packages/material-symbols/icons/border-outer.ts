import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBorderOuterIcon],svg[material-symbols-border-outer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h14V5H5zm-2 2V3h18v18zm4-8v-2h2v2zm4 4v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2zm4 4v-2h2v2z"></svg:path>`,
})
export class MaterialSymbolsBorderOuterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
