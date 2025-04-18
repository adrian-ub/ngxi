import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBrightnessLow20RegularIcon],svg[fluent-brightness-low-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 3.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0zM10 6a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-3 4a3 3 0 1 1 6 0a3 3 0 0 1-6 0m10 0a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 .5.5m-6.5 5.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0zM5 10a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 .5.5m.854-4.854a.5.5 0 1 0-.708.708l.5.5a.5.5 0 1 0 .708-.708zm-.708 9.708a.5.5 0 0 0 .708 0l.5-.5a.5.5 0 0 0-.708-.708l-.5.5a.5.5 0 0 0 0 .708m9-9.708a.5.5 0 0 1 .708.708l-.5.5a.5.5 0 0 1-.708-.708zm.708 9.708a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.5.5a.5.5 0 0 1 0 .708"></svg:path>`,
})
export class FluentBrightnessLow20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
