import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCookingOutlineSharpIcon],svg[material-symbols-cooking-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 21v-3H2v-2h7q.825 0 1.413.587Q11 17.175 11 18v3Zm4 0v-3q0-.825.588-1.413Q14.175 16 15 16h7v2h-7v3Zm-7-6q-1.25 0-2.125-.875T3 12V8h18v4q0 1.25-.875 2.125T18 15Zm0-2h12q.425 0 .712-.288Q19 12.425 19 12v-2H5v2q0 .425.287.712Q5.575 13 6 13ZM3 7V5h6V4q0-.425.288-.713Q9.575 3 10 3h4q.425 0 .713.287Q15 3.575 15 4v1h6v2Zm9 4.5Z"></svg:path>`,
})
export class MaterialSymbolsCookingOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
