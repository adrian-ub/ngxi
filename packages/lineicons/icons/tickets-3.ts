import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsTickets3Icon],svg[lineicons-tickets-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.57 6.897a.9.9 0 1 1 0 1.8a.9.9 0 0 1 0-1.8m.9 3.701a.9.9 0 1 0-1.8 0a.9.9 0 0 0 1.8 0m-.9 1.9a.9.9 0 1 1 0 1.8a.9.9 0 0 1 0-1.8m.9 3.7a.9.9 0 1 0-1.8 0a.9.9 0 0 0 1.8 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4.919 5.066a.75.75 0 0 1 .75-.75h12.663a.75.75 0 0 1 .75.75a2.42 2.42 0 0 0 2.418 2.42a.75.75 0 0 1 .75.75v7.527a.75.75 0 0 1-.75.75a2.42 2.42 0 0 0-2.418 2.418a.75.75 0 0 1-.75.75H5.669a.75.75 0 0 1-.75-.75A2.42 2.42 0 0 0 2.5 16.513a.75.75 0 0 1-.75-.75V8.235a.75.75 0 0 1 .75-.75a2.42 2.42 0 0 0 2.419-2.419m1.428.75A3.92 3.92 0 0 1 3.25 8.914v6.17a3.92 3.92 0 0 1 3.097 3.097h11.307a3.92 3.92 0 0 1 3.096-3.097v-6.17a3.92 3.92 0 0 1-3.096-3.098z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsTickets3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
