import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCity16FilledIcon],svg[fluent-city-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.501 1.5a.5.5 0 0 0-1 0V2H6.5A1.5 1.5 0 0 0 5 3.5v.504a2 2 0 0 1 2 2V14h2V7.504a2.5 2.5 0 0 1 2-2.45V3.5A1.5 1.5 0 0 0 9.5 2h-.999zM12.5 14H10V7.504a1.5 1.5 0 0 1 1.5-1.5h1V6A1.5 1.5 0 0 1 14 7.5v5a1.5 1.5 0 0 1-1.5 1.5M4.843 5.135a.75.75 0 0 1 1.158.63L6 13.5a.5.5 0 0 1-.5.5h-2A1.5 1.5 0 0 1 2 12.5V7.793a1.5 1.5 0 0 1 .684-1.258z"></svg:path>`,
})
export class FluentCity16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
