import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBoyRoundedIcon],svg[material-symbols-boy-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7.5q-.725 0-1.237-.513T10.25 5.75t.513-1.237T12 4t1.238.513t.512 1.237t-.513 1.238T12 7.5M10 19v-4q-.425 0-.712-.288T9 14v-3.5q0-.825.588-1.412T11 8.5h2q.825 0 1.413.588T15 10.5V14q0 .425-.288.713T14 15v4q0 .425-.288.713T13 20h-2q-.425 0-.712-.288T10 19"></svg:path>`,
})
export class MaterialSymbolsBoyRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
