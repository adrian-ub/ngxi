import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFitWidthIcon],svg[material-symbols-fit-width-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h2v18zm16 0V3h2v18zM7 13v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2z"></svg:path>`,
})
export class MaterialSymbolsFitWidthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
