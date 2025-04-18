import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsRollerShadesClosedOutlineRoundedIcon],svg[material-symbols-roller-shades-closed-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22.75q-.725 0-1.237-.513T10.25 21H3q-.425 0-.712-.288T2 20t.288-.712T3 19h1V5q0-.825.588-1.412T6 3h12q.825 0 1.413.588T20 5v14h1q.425 0 .713.288T22 20t-.288.713T21 21h-7.25q0 .725-.513 1.238T12 22.75M6 15h12V5H6zm0 4h5v-2H6zm7 0h5v-2h-5zM6 5h12z"></svg:path>`,
})
export class MaterialSymbolsRollerShadesClosedOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
