import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVerticalShadesClosedRoundedIcon],svg[material-symbols-vertical-shades-closed-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21q-.425 0-.712-.288T2 20t.288-.712T3 19h1V5q0-.825.588-1.412T6 3h12q.825 0 1.413.588T20 5v14h1q.425 0 .713.288T22 20t-.288.713T21 21zm3-2h1.5V5H6zm3.5 0H11V5H9.5zm3.5 0h1.5V5H13zm3.5 0H18V5h-1.5z"></svg:path>`,
})
export class MaterialSymbolsVerticalShadesClosedRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
