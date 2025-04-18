import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonTicketFillIcon],svg[iconamoon-ticket-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 4a3 3 0 0 0-3 3v3a1 1 0 0 0 1 1a1 1 0 0 1 0 2a1 1 0 0 0-1 1v3a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-3a1 1 0 0 0-1-1a1 1 0 0 1 0-2a1 1 0 0 0 1-1V7a3 3 0 0 0-3-3zM4 7a1 1 0 0 1 1-1h4v12H5a1 1 0 0 1-1-1v-2.171a3 3 0 0 0 1.121-.708l-.692-.692l.692.692A3 3 0 0 0 4 9.171z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonTicketFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
