import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLineEndSquareOutlineRoundedIcon],svg[material-symbols-line-end-square-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 15.5h7v-7h-7zm-1 2q-.425 0-.712-.288T11 16.5V13H3q-.425 0-.712-.288T2 12t.288-.712T3 11h8V7.5q0-.425.288-.712T12 6.5h9q.425 0 .713.288T22 7.5v9q0 .425-.288.713T21 17.5zm4.5-5.5"></svg:path>`,
})
export class MaterialSymbolsLineEndSquareOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
