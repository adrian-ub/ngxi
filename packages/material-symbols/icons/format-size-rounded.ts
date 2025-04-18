import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFormatSizeRoundedIcon],svg[material-symbols-format-size-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 7h-3.5q-.625 0-1.062-.437T9 5.5t.438-1.062T10.5 4h10q.625 0 1.063.438T22 5.5t-.437 1.063T20.5 7H17v11.5q0 .625-.437 1.063T15.5 20t-1.062-.437T14 18.5zm-9 5H3.5q-.625 0-1.062-.437T2 10.5t.438-1.062T3.5 9h6q.625 0 1.063.438T11 10.5t-.437 1.063T9.5 12H8v6.5q0 .625-.437 1.063T6.5 20t-1.062-.437T5 18.5z"></svg:path>`,
})
export class MaterialSymbolsFormatSizeRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
