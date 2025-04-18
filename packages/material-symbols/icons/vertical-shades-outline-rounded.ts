import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVerticalShadesOutlineRoundedIcon],svg[material-symbols-vertical-shades-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21q-.425 0-.712-.288T2 20t.288-.712T3 19h1V5q0-.825.588-1.412T6 3h12q.825 0 1.413.588T20 5v14h1q.425 0 .713.288T22 20t-.288.713T21 21zm3-2h2V5H6zm4 0h4V5h-4zm6 0h2V5h-2zM6 19V5zm12 0V5z"></svg:path>`,
})
export class MaterialSymbolsVerticalShadesOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
