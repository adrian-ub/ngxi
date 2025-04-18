import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAlignHorizontalRightRoundedIcon],svg[material-symbols-align-horizontal-right-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 22q-.425 0-.712-.288T20 21V3q0-.425.288-.712T21 2t.713.288T22 3v18q0 .425-.288.713T21 22M9.5 17q-.625 0-1.062-.437T8 15.5t.438-1.062T9.5 14h7q.625 0 1.063.438T18 15.5t-.437 1.063T16.5 17zm-6-7q-.625 0-1.062-.437T2 8.5t.438-1.062T3.5 7h13q.625 0 1.063.438T18 8.5t-.437 1.063T16.5 10z"></svg:path>`,
})
export class MaterialSymbolsAlignHorizontalRightRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
