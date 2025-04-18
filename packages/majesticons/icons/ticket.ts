import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsTicketIcon],svg[majesticons-ticket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 4h12a1 1 0 1 0 2 0h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-2a1 1 0 1 0-2 0H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m14 4.001a1 1 0 1 1-2 0V8a1 1 0 1 1 2 0zm-1 5a1 1 0 0 0 1-1V12a1 1 0 1 0-2 0v.001a1 1 0 0 0 1 1m1 3a1 1 0 1 1-2 0V16a1 1 0 1 1 2 0z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsTicketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
