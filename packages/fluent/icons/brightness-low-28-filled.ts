import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBrightnessLow28FilledIcon],svg[fluent-brightness-low-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.75 4.75a.75.75 0 0 0-1.5 0v1.496a.75.75 0 0 0 1.5 0zM20 14a6 6 0 1 1-12 0a6 6 0 0 1 12 0m-1.5 0A4.5 4.5 0 0 0 14 9.5v9a4.5 4.5 0 0 0 4.5-4.5m5.5 0a.75.75 0 0 1-.75.75h-1.497a.75.75 0 0 1 0-1.5h1.496A.75.75 0 0 1 24 14m-9.25 7.754a.75.75 0 0 0-1.5 0v1.496a.75.75 0 0 0 1.5 0zM7 14a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 7 14m.78-7.28a.75.75 0 0 0-1.061 1.06l1 1a.75.75 0 0 0 1.06-1.06zM6.718 21.28a.75.75 0 0 0 1.06 0l1-1a.75.75 0 1 0-1.06-1.06l-1 1a.75.75 0 0 0 0 1.06m13.5-14.56a.75.75 0 1 1 1.06 1.06l-1 1a.75.75 0 1 1-1.06-1.06zm1.06 14.56a.75.75 0 0 1-1.06 0l-.989-.988a.75.75 0 1 1 1.06-1.06l.99.988a.75.75 0 0 1 0 1.06"></svg:path>`,
})
export class FluentBrightnessLow28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
