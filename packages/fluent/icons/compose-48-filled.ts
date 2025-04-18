import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCompose48FilledIcon],svg[fluent-compose-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43.56 6.56a1.5 1.5 0 1 0-2.12-2.12L18.878 27L18 30l3-.879zM28.5 6a1.5 1.5 0 0 1 0 3h-16A3.5 3.5 0 0 0 9 12.5v23a3.5 3.5 0 0 0 3.5 3.5h23a3.5 3.5 0 0 0 3.5-3.5v-16a1.5 1.5 0 0 1 3 0v16a6.5 6.5 0 0 1-6.5 6.5h-23A6.5 6.5 0 0 1 6 35.5v-23A6.5 6.5 0 0 1 12.5 6z"></svg:path>`,
})
export class FluentCompose48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
