import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGridOnOutlineSharpIcon],svg[material-symbols-grid-on-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h18v18zm2-2h3.325v-3.325H5zm5.325 0h3.35v-3.325h-3.35zm5.35 0H19v-3.325h-3.325zM5 13.675h3.325v-3.35H5zm5.325 0h3.35v-3.35h-3.35zm5.35 0H19v-3.35h-3.325zM5 8.325h3.325V5H5zm5.325 0h3.35V5h-3.35zm5.35 0H19V5h-3.325z"></svg:path>`,
})
export class MaterialSymbolsGridOnOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
