import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentGridDots20RegularIcon],svg[fluent-grid-dots-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 4a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m12 12a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M16 11.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5M17.25 4a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M10 17.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5M11.25 10a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M10 5.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5M5.25 16a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M4 11.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5"></svg:path>`,
})
export class FluentGridDots20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
