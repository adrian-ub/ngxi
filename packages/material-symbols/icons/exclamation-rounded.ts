import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsExclamationRoundedIcon],svg[material-symbols-exclamation-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14q-.425 0-.712-.288T11 13V6q0-.425.288-.712T12 5t.713.288T13 6v7q0 .425-.288.713T12 14m0 5q-.425 0-.712-.288T11 18t.288-.712T12 17t.713.288T13 18t-.288.713T12 19"></svg:path>`,
})
export class MaterialSymbolsExclamationRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
