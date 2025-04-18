import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCloudWords24RegularIcon],svg[fluent-cloud-words-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.505 10.785a4.5 4.5 0 0 1 8.99 0a.75.75 0 0 0 .75.715h.255a3 3 0 1 1 0 6h-11a3 3 0 1 1 0-6h.256c.4 0 .73-.315.749-.715M12 5a6 6 0 0 0-5.92 5.02A4.5 4.5 0 0 0 6.5 19h11a4.5 4.5 0 0 0 .42-8.98A6 6 0 0 0 12 5m-2 4.5a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm-4.5 4.75a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m8.25-.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentCloudWords24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
