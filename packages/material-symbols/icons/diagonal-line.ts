import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDiagonalLineIcon],svg[material-symbols-diagonal-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 22q-1.25 0-2.125-.875T16 19q0-.35.075-.675t.225-.625l-10-10q-.3.15-.625.225T5 8q-1.25 0-2.125-.875T2 5t.875-2.125T5 2t2.125.875T8 5q0 .35-.075.675T7.7 6.3l10 10q.3-.15.625-.225T19 16q1.25 0 2.125.875T22 19t-.875 2.125T19 22"></svg:path>`,
})
export class MaterialSymbolsDiagonalLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
