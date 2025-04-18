import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconSymbolArrayIcon],svg[codicon-symbol-array-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m1.5 2l-.5.5v11l.5.5H4v-1H2V3h2V2zm13 12l.5-.5v-11l-.5-.5H12v1h2v10h-2v1z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconSymbolArrayIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
