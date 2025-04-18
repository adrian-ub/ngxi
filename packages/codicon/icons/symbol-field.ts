import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconSymbolFieldIcon],svg[codicon-symbol-field-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.45 4.5l-5-2.5h-.9l-7 3.5l-.55.89v4.5l.55.9l5 2.5h.9l7-3.5l.55-.9v-4.5zm-8 8.64l-4.5-2.25V7.17l4.5 2zm.5-4.8L2.29 6.23l6.66-3.34l4.67 2.34zm7 1.55l-6.5 3.25V9.21l6.5-3z"></svg:path>`,
})
export class CodiconSymbolFieldIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
