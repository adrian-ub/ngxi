import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLocationTargetSquare24RegularIcon],svg[fluent-location-target-square-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zM4.5 6.25c0-.966.784-1.75 1.75-1.75h11.5c.966 0 1.75.784 1.75 1.75v11.5a1.75 1.75 0 0 1-1.75 1.75H6.25a1.75 1.75 0 0 1-1.75-1.75zM9 12a3 3 0 1 1 6 0a3 3 0 0 1-6 0m-1.438-.75H6.75a.75.75 0 0 0 0 1.5h.812a4.5 4.5 0 0 0 3.688 3.688v.812a.75.75 0 0 0 1.5 0v-.812a4.5 4.5 0 0 0 3.688-3.688h.812a.75.75 0 0 0 0-1.5h-.812a4.5 4.5 0 0 0-3.688-3.688V6.75a.75.75 0 0 0-1.5 0v.812a4.5 4.5 0 0 0-3.688 3.688M13.5 12a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path>`,
})
export class FluentLocationTargetSquare24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
