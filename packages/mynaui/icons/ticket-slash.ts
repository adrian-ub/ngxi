import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiTicketSlashIcon],svg[mynaui-ticket-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v.5m0 7v.5m-9 1v-3a2 2 0 1 0 0-4V7a2 2 0 0 1 2-2h10M5 19h14a2 2 0 0 0 2-2v-3a2 2 0 1 1 0-4V7a2 2 0 0 0-2-2M3 21L21 3"></svg:path>`,
})
export class MynauiTicketSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
