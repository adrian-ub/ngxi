import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTablet16FilledIcon],svg[fluent-tablet-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4.75C1 3.784 1.784 3 2.75 3h10.5c.966 0 1.75.784 1.75 1.75v6.5A1.75 1.75 0 0 1 13.25 13H2.75A1.75 1.75 0 0 1 1 11.25zM6.5 10a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentTablet16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
