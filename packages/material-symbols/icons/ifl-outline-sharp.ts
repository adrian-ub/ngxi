import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsIflOutlineSharpIcon],svg[material-symbols-ifl-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 17.5q.625 0 1.063-.437T17.5 16t-.437-1.062T16 14.5t-1.062.438T14.5 16t.438 1.063T16 17.5m-4-4q.625 0 1.063-.437T13.5 12t-.437-1.062T12 10.5t-1.062.438T10.5 12t.438 1.063T12 13.5m-4-4q.625 0 1.063-.437T9.5 8t-.437-1.062T8 6.5t-1.062.438T6.5 8t.438 1.063T8 9.5M3 21V3h18v18zm2-2h14V5H5zm0 0V5z"></svg:path>`,
})
export class MaterialSymbolsIflOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
