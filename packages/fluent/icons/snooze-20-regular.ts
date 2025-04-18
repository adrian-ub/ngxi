import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSnooze20RegularIcon],svg[fluent-snooze-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 4a.5.5 0 0 0 0 1h4.028l-4.435 6.21a.5.5 0 0 0 .407.79h5a.5.5 0 0 0 0-1h-4.028l4.435-6.21A.5.5 0 0 0 15.5 4zm-6 6a.5.5 0 0 0 0 1h2.96l-3.35 4.188A.5.5 0 0 0 4.5 16h4a.5.5 0 0 0 0-1H5.54l3.35-4.188A.5.5 0 0 0 8.5 10z"></svg:path>`,
})
export class FluentSnooze20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
