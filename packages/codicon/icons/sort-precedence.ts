import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconSortPrecedenceIcon],svg[codicon-sort-precedence-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 2L6 3v3h1V3h7v2.453l.207-.16l.793.793V3l-1-1zm1 2h2v2H8zM5 9H3v2h2zM2 7L1 8v5l1 1h7l1-1V8L9 7zm0 6V8h7v5zm6-3H6v2h2zm5-6h-1v3.864l-1.182-1.182l-.707.707l2.035 2.036h.708l2.035-2.036l-.707-.707L13 7.864z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconSortPrecedenceIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
