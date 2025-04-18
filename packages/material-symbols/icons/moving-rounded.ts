import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMovingRoundedIcon],svg[material-symbols-moving-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 9.425l-4.475 4.45q-.875.875-2.125.875t-2.125-.875L10.1 12.7q-.275-.275-.7-.275t-.7.275l-4.6 4.6q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.6-4.6q.875-.875 2.125-.875t2.125.875l1.15 1.15q.3.3.713.3t.712-.3L18.575 8H17q-.425 0-.712-.288T16 7t.288-.712T17 6h4q.425 0 .713.288T22 7v4q0 .425-.288.713T21 12t-.712-.288T20 11z"></svg:path>`,
})
export class MaterialSymbolsMovingRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
