import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAlignSpaceBetweenRoundedIcon],svg[material-symbols-align-space-between-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 22q-.425 0-.712-.288T2 21t.288-.712T3 20h4v-2q0-.425.288-.712T8 17h8q.425 0 .713.288T17 18v2h4q.425 0 .713.288T22 21t-.288.713T21 22zM8 7q-.425 0-.712-.288T7 6V4H3q-.425 0-.712-.288T2 3t.288-.712T3 2h18q.425 0 .713.288T22 3t-.288.713T21 4h-4v2q0 .425-.288.713T16 7z"></svg:path>`,
})
export class MaterialSymbolsAlignSpaceBetweenRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
