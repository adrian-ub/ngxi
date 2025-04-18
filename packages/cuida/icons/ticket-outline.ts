import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaTicketOutlineIcon],svg[cuida-ticket-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g class="ticket-outline"><svg:g fill="currentColor" class="Vector"><svg:path fill-rule="evenodd" d="M21 11a1 1 0 1 0 0 2a1 1 0 1 1 0 2a3 3 0 1 1 0-6a1 1 0 1 1 0 2M3 11a1 1 0 1 1 0 2a1 1 0 1 0 0 2a3 3 0 1 0 0-6a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v2h-2V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2H2zm2 6v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2h2v2a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-2z" clip-rule="evenodd"></svg:path><svg:path d="M13 6a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0zm0 5a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0zm0 6a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0z"></svg:path></svg:g></svg:g>`,
})
export class CuidaTicketOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
