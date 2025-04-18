import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTicketHorizontal20RegularIcon],svg[fluent-ticket-horizontal-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 5A1.5 1.5 0 0 1 18 6.5V8a.5.5 0 0 1-.5.5a1.5 1.5 0 0 0 0 3a.5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 2 13.5V12a.5.5 0 0 1 .5-.5a1.5 1.5 0 0 0 0-3A.5.5 0 0 1 2 8V6.5A1.5 1.5 0 0 1 3.5 5zm.5 1.5a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v1.05a2.5 2.5 0 0 1 0 4.9v1.05a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-1.05a2.5 2.5 0 0 1-.161-4.862L17 7.55z"></svg:path>`,
})
export class FluentTicketHorizontal20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
