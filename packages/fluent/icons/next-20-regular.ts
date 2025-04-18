import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNext20RegularIcon],svg[fluent-next-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3.5a.5.5 0 0 0-1 0v13a.5.5 0 1 0 1 0zM3 4.252c0-1 1.117-1.595 1.947-1.038l8.5 5.707a1.25 1.25 0 0 1 .007 2.071l-8.5 5.793A1.25 1.25 0 0 1 3 15.752zm1.39-.207a.25.25 0 0 0-.39.207v11.5c0 .2.225.32.391.207l8.5-5.793a.25.25 0 0 0-.002-.414z"></svg:path>`,
})
export class FluentNext20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
