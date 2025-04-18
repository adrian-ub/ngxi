import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTransitEnterexitRoundedIcon],svg[material-symbols-transit-enterexit-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.15 15h3.35q.625 0 1.063.438T16 16.5t-.437 1.063T14.5 18H7q-.425 0-.712-.288T6 17V9.5q0-.625.438-1.062T7.5 8t1.063.438T9 9.5v3.25l5.7-5.7q.45-.45 1.1-.45t1.1.45t.45 1.1t-.45 1.1z"></svg:path>`,
})
export class MaterialSymbolsTransitEnterexitRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
