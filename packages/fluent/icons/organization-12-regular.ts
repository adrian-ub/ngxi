import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentOrganization12RegularIcon],svg[fluent-organization-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 4.937a2 2 0 1 1 1 0V6h2a1 1 0 0 1 1 1v1.063a2 2 0 1 1-1 0V7h-5v1.063a2 2 0 1 1-1 0V7a1 1 0 0 1 1-1h2zM6 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-3 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 0 2 0a1 1 0 0 0-2 0"></svg:path>`,
})
export class FluentOrganization12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
