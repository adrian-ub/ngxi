import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentConnected16FilledIcon],svg[fluent-connected-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.016 4.723a2 2 0 1 1 .707-.707l2.261 2.26A2 2 0 0 1 8 6c.37 0 .718.101 1.016.277l2.26-2.261a2 2 0 1 1 .707.707l-2.26 2.261a1.99 1.99 0 0 1 0 2.032l2.261 2.26a2 2 0 1 1-.707.707l-2.261-2.26A2 2 0 0 1 8 10a2 2 0 0 1-1.016-.277l-2.26 2.261a2 2 0 1 1-.707-.707l2.26-2.261A2 2 0 0 1 6 8c0-.37.101-.718.277-1.016z"></svg:path>`,
})
export class FluentConnected16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
