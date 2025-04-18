import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSouthWestRoundedIcon],svg[material-symbols-south-west-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 19q-.425 0-.712-.288T5 18v-8q0-.425.288-.712T6 9t.713.288T7 10v5.6L17.9 4.7q.275-.275.7-.275t.7.275t.275.7t-.275.7L8.4 17H14q.425 0 .713.288T15 18t-.288.713T14 19z"></svg:path>`,
})
export class MaterialSymbolsSouthWestRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
