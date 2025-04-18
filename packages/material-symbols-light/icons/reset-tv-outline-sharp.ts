import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightResetTvOutlineSharpIcon],svg[material-symbols-light-reset-tv-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 20v-2H3V4h18v4.5h-1V5H4v12h16v-5.5h-8.392l2.35 2.35l-.708.708L9.692 11l3.558-3.558l.708.708l-2.35 2.35H21V18h-6v2zm3.5-9"></svg:path>`,
})
export class MaterialSymbolsLightResetTvOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
