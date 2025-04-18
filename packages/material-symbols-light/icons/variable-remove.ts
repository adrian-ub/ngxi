import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVariableRemoveIcon],svg[material-symbols-light-variable-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 16V8h16v2.123q-.177-.042-.36-.054q-.182-.011-.37-.011q-2.16 0-3.686 1.523t-1.526 3.688q0 .189.011.371q.012.183.054.36zm13.15 2.096l-.708-.707l2.12-2.12l-2.12-2.119l.708-.708l2.12 2.12l2.119-2.12l.707.708l-2.113 2.12l2.113 2.119l-.707.707l-2.12-2.113z"></svg:path>`,
})
export class MaterialSymbolsLightVariableRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
