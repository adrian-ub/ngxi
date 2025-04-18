import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStatMinus2Icon],svg[material-symbols-light-stat-minus-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 18.27l-5.308-5.308l.708-.708l4.6 4.594l4.6-4.594l.708.707zm0-5.962L6.692 7l.708-.708l4.6 4.595l4.6-4.595l.708.708z"></svg:path>`,
})
export class MaterialSymbolsLightStatMinus2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
