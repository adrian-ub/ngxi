import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAirplaneTicketIcon],svg[material-symbols-airplane-ticket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.85 15.65l8.9-2.35q.375-.1.563-.462t.087-.738t-.437-.562t-.713-.088l-2.45.65l-4-3.75l-1.4.35l2.4 4.2l-2.4.6l-1.25-.95l-.95.25zM20 20H4q-.825 0-1.412-.587T2 18v-4q.825 0 1.413-.587T4 12t-.587-1.412T2 10V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20"></svg:path>`,
})
export class MaterialSymbolsAirplaneTicketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
