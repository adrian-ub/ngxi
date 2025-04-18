import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewArrayOutlineRoundedIcon],svg[material-symbols-view-array-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 17V7v10Zm10 2q-.425 0-.712-.288T18 18V6q0-.425.288-.712T19 5h1q.425 0 .713.288T21 6v12q0 .425-.288.713T20 19h-1ZM8 19q-.425 0-.712-.288T7 18V6q0-.425.288-.712T8 5h8q.425 0 .713.288T17 6v12q0 .425-.288.713T16 19H8Zm-4 0q-.425 0-.712-.288T3 18V6q0-.425.288-.712T4 5h1q.425 0 .713.288T6 6v12q0 .425-.288.713T5 19H4ZM9 7v10h6V7H9Z"></svg:path>`,
})
export class MaterialSymbolsViewArrayOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
