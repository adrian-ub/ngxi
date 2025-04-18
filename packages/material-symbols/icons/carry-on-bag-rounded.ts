import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCarryOnBagRoundedIcon],svg[material-symbols-carry-on-bag-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 21.5q-.625 0-1.062-.437T14.5 20t.438-1.062T16 18.5t1.063.438T17.5 20t-.437 1.063T16 21.5M8 21q-.825 0-1.412-.587T6 19V9q0-.825.588-1.412T8 7h1v14zm2.5 0V7H14V4h-1q-.425 0-.712-.288T12 3t.288-.712T13 2h2q.425 0 .713.288T16 3v14q-1.25 0-2.125.875T13 20q0 .275.038.513t.137.487z"></svg:path>`,
})
export class MaterialSymbolsCarryOnBagRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
