import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMoreDownRoundedIcon],svg[material-symbols-more-down-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17h8q.425 0 .713.288T16 18t-.288.713T15 19H6q-.425 0-.712-.288T5 18V9q0-.425.288-.712T6 8t.713.288T7 9zm5-5h8q.425 0 .713.288T21 13t-.288.713T20 14h-9q-.425 0-.712-.288T10 13V4q0-.425.288-.712T11 3t.713.288T12 4z"></svg:path>`,
})
export class MaterialSymbolsMoreDownRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
