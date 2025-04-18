import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTicket20FilledIcon],svg[fluent-ticket-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M18 6v1.5a.5.5 0 0 1-.5.5a2 2 0 1 0 0 4a.5.5 0 0 1 .5.5V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1.5a.5.5 0 0 1 .5-.5a2 2 0 1 0 0-4a.5.5 0 0 1-.5-.5V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z" fill="currentColor" fill-rule="nonzero"></svg:path>`,
})
export class FluentTicket20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
