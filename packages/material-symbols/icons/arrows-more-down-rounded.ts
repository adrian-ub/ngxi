import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsArrowsMoreDownRoundedIcon],svg[material-symbols-arrows-more-down-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 21q-.425 0-.712-.288T5 20v-9q0-.425.288-.712T6 10t.713.288T7 11v8h8q.425 0 .713.288T16 20t-.288.713T15 21zm5-5q-.425 0-.712-.288T10 15V6q0-.425.288-.712T11 5t.713.288T12 6v8h8q.425 0 .713.288T21 15t-.288.713T20 16z"></svg:path>`,
})
export class MaterialSymbolsArrowsMoreDownRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
