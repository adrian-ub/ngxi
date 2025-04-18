import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAirplaneTicketSharpIcon],svg[material-symbols-airplane-ticket-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20v-6q.825 0 1.413-.587T4 12t-.587-1.412T2 10V4h20v16zm6.85-4.35l8.9-2.35q.375-.1.563-.463t.087-.737t-.437-.562t-.713-.088l-2.45.65l-4-3.75l-1.4.35l2.4 4.2l-2.4.6l-1.25-.95l-.95.25z"></svg:path>`,
})
export class MaterialSymbolsAirplaneTicketSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
