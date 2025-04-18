import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSkilletCooktopOutlineSharpIcon],svg[material-symbols-skillet-cooktop-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 15V8h13V6.275l6.675-2.225l.625 1.9L18 7.725V15zm2-2h11v-3H5zm4 8v-3H2v-2h9v5zm4 0v-5h9v2h-7v3zm-2.5-9.5"></svg:path>`,
})
export class MaterialSymbolsSkilletCooktopOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
