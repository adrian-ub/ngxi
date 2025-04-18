import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCarryOnBagSharpIcon],svg[material-symbols-carry-on-bag-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 21.5q-.625 0-1.062-.437T14.5 20t.438-1.062T16 18.5t1.063.438T17.5 20t-.437 1.063T16 21.5M6 21V7h3v14zm4.5 0V7H14V4h-2V2h4v15q-1.25 0-2.125.875T13 20q0 .275.038.513t.137.487z"></svg:path>`,
})
export class MaterialSymbolsCarryOnBagSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
