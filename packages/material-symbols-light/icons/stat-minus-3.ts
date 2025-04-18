import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStatMinus3Icon],svg[material-symbols-light-stat-minus-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 21.252l-5.308-5.308l.708-.707L12 19.83l4.6-4.594l.708.707zm0-5.95L6.692 9.994l.708-.707L12 13.88l4.6-4.594l.708.707zm0-5.95L6.692 4.044l.708-.707L12 7.93l4.6-4.594l.708.707z"></svg:path>`,
})
export class MaterialSymbolsLightStatMinus3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
