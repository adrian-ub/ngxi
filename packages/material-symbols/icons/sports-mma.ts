import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsMmaIcon],svg[material-symbols-sports-mma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 21q-.425 0-.712-.288T7 20v-3h10v3q0 .425-.288.713T16 21zM19 8v3q0 .075-.05.2L18.2 15q-.075.45-.413.725T17 16H7q-.45 0-.788-.275T5.8 15l-.75-3.8Q5 11.075 5 11V5q0-.825.588-1.412T7 3h8q.825 0 1.413.588T17 5v3q0-.425.288-.712T18 7t.713.288T19 8M8 10h6V7H8z"></svg:path>`,
})
export class MaterialSymbolsSportsMmaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
