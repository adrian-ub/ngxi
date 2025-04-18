import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTicketIcon],svg[carbon-ticket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 14a1 1 0 0 0 1-1V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v5a1 1 0 0 0 1 1a2 2 0 0 1 0 4a1 1 0 0 0-1 1v5a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1a2 2 0 0 1 0-4m-1 5.87V24h-7v-3h-2v3H4v-4.13a4 4 0 0 0 0-7.74V8h15v3h2V8h7v4.13a4 4 0 0 0 0 7.74"></svg:path><svg:path fill="currentColor" d="M19 13h2v6h-2z"></svg:path>`,
})
export class CarbonTicketIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
