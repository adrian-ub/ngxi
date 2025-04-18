import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCallMadeRoundedIcon],svg[material-symbols-call-made-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 8.4L6.1 19.3q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7L15.6 7H10q-.425 0-.712-.288T9 6t.288-.712T10 5h8q.425 0 .713.288T19 6v8q0 .425-.288.713T18 15t-.712-.288T17 14z"></svg:path>`,
})
export class MaterialSymbolsCallMadeRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
