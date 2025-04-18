import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBalloon20FilledIcon],svg[fluent-balloon-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7a5 5 0 0 1 10 0a8.3 8.3 0 0 1-1.598 4.859c-.791 1.074-1.837 1.892-2.902 2.093V14a1 1 0 0 0 1 1H14a2 2 0 0 1 2 2v.5a.5.5 0 0 1-1 0V17a1 1 0 0 0-1-1h-2.5a2 2 0 0 1-2-2v-.048c-1.065-.2-2.11-1.017-2.902-2.091A8.3 8.3 0 0 1 5 7m5.568-2.995a.5.5 0 1 0-.141.99a1.86 1.86 0 0 1 1.575 1.574a.5.5 0 0 0 .99-.143a2.86 2.86 0 0 0-2.424-2.421"></svg:path>`,
})
export class FluentBalloon20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
