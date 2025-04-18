import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsUpiPayOutlineIcon],svg[material-symbols-upi-pay-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15h1.5v-2H15q.425 0 .713-.288T16 12v-2q0-.425-.288-.712T15 9h-4zm6 0h1.5V9H17zm-4.5-3.5v-1h2v1zM6 15h3q.425 0 .713-.288T10 14V9H8.5v4.5h-2V9H5v5q0 .425.288.713T6 15m-2 5q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h16V6H4zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsUpiPayOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
