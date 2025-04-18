import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHorizontalDistributeRoundedIcon],svg[material-symbols-horizontal-distribute-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 22q-.425 0-.712-.288T2 21V3q0-.425.288-.712T3 2t.713.288T4 3v18q0 .425-.288.713T3 22m9-5q-.625 0-1.062-.437T10.5 15.5v-7q0-.625.438-1.062T12 7t1.063.438T13.5 8.5v7q0 .625-.437 1.063T12 17m9 5q-.425 0-.712-.288T20 21V3q0-.425.288-.712T21 2t.713.288T22 3v18q0 .425-.288.713T21 22"></svg:path>`,
})
export class MaterialSymbolsHorizontalDistributeRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
