import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconSymbolStructureIcon],svg[codicon-symbol-structure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2L1 3v3l1 1h12l1-1V3l-1-1zm0 1h12v3H2zm-1 7l1-1h3l1 1v3l-1 1H2l-1-1zm2 0H2v3h3v-3zm7 0l1-1h3l1 1v3l-1 1h-3l-1-1zm2 0h-1v3h3v-3z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconSymbolStructureIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
