import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBrightnessLow24FilledIcon],svg[fluent-brightness-low-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 4.25a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0zM17 12a5 5 0 1 1-10 0a5 5 0 0 1 10 0m-1.5 0A3.5 3.5 0 0 0 12 8.5v7a3.5 3.5 0 0 0 3.5-3.5m5 0a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75m-7.75 6.75a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0zM6 12a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1 0-1.5h1A.75.75 0 0 1 6 12m1.28-5.78a.75.75 0 0 0-1.06 1.06l.5.5a.75.75 0 0 0 1.06-1.06zM6.22 17.78a.75.75 0 0 0 1.06 0l.5-.5a.75.75 0 1 0-1.06-1.06l-.5.5a.75.75 0 0 0 0 1.06m10.5-11.56a.75.75 0 1 1 1.06 1.06l-.5.5a.75.75 0 1 1-1.06-1.06zm1.06 11.56a.75.75 0 0 1-1.06 0l-.5-.5a.75.75 0 1 1 1.06-1.06l.5.5a.75.75 0 0 1 0 1.06"></svg:path>`,
})
export class FluentBrightnessLow24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
