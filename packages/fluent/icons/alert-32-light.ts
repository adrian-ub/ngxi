import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAlert32LightIcon],svg[fluent-alert-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4a9 9 0 0 0-9 9v4.804l-1.93 4.825A1 1 0 0 0 5.998 24H12a4 4 0 0 0 8 0h6.002a1 1 0 0 0 .928-1.371L25 17.804V13a9 9 0 0 0-9-9m3 20a3 3 0 1 1-6 0zM8 13a8 8 0 0 1 16 0v4.804a1 1 0 0 0 .071.371L26.001 23H5.998l1.93-4.825A1 1 0 0 0 8 17.804z"></svg:path>`,
})
export class FluentAlert32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
