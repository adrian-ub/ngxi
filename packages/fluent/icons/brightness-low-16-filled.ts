import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBrightnessLow16FilledIcon],svg[fluent-brightness-low-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 2.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0zM8 5a3 3 0 1 1 0 6a3 3 0 0 1 0-6m2 3a2 2 0 0 0-2-2v4a2 2 0 0 0 2-2m4 0a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 .5.5m-5.5 4.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0zM4 8a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1 0-1h1A.5.5 0 0 1 4 8m.354-4.353a.5.5 0 0 0-.708.707l.5.5a.5.5 0 1 0 .708-.707zm-.708 8.707a.5.5 0 0 0 .708 0l.5-.5a.5.5 0 1 0-.708-.707l-.5.5a.5.5 0 0 0 0 .707m8-8.707a.5.5 0 0 1 .708.707l-.5.5a.5.5 0 0 1-.708-.707zm0 8.707l-.5-.5a.5.5 0 0 1 .708-.707l.5.5a.5.5 0 0 1-.708.707"></svg:path>`,
})
export class FluentBrightnessLow16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
