import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVerticalAlignBottomRoundedIcon],svg[material-symbols-vertical-align-bottom-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.425 0-.712-.288T4 20t.288-.712T5 19h14q.425 0 .713.288T20 20t-.288.713T19 21zm7-4.425q-.2 0-.375-.062T11.3 16.3l-3.6-3.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l1.9 1.9V4q0-.425.288-.712T12 3t.713.288T13 4v9.2l1.9-1.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-3.6 3.6q-.15.15-.325.213t-.375.062"></svg:path>`,
})
export class MaterialSymbolsVerticalAlignBottomRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
