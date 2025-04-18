import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteTicketSolidIcon],svg[flowbite-ticket-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5a2 2 0 0 0-2 2v2.5a1 1 0 0 0 1 1a1.5 1.5 0 1 1 0 3a1 1 0 0 0-1 1V17a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2.5a1 1 0 0 0-1-1a1.5 1.5 0 1 1 0-3a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2z"></svg:path>`,
})
export class FlowbiteTicketSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
