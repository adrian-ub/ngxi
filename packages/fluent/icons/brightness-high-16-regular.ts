import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBrightnessHigh16RegularIcon],svg[fluent-brightness-high-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 8 1m0 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-1a2 2 0 1 1 0-4a2 2 0 0 1 0 4m6.5-1.5a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1zM8 13a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 8 13M2.5 8.5a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1zm.646-5.353a.5.5 0 0 1 .708 0l1 1a.5.5 0 1 1-.708.707l-1-1a.5.5 0 0 1 0-.707m.708 9.707a.5.5 0 1 1-.708-.707l1-1a.5.5 0 1 1 .708.707zm9-9.707a.5.5 0 0 0-.708 0l-1 1a.5.5 0 0 0 .708.707l1-1a.5.5 0 0 0 0-.707m-.708 9.707a.5.5 0 0 0 .708-.707l-1-1a.5.5 0 0 0-.708.707z"></svg:path>`,
})
export class FluentBrightnessHigh16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
