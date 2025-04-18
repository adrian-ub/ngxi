import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStatMinus1Icon],svg[material-symbols-light-stat-minus-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14.702L6.692 9.394l.708-.707L12 13.28l4.6-4.594l.708.707z"></svg:path>`,
})
export class MaterialSymbolsLightStatMinus1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
