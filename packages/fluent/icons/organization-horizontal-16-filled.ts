import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentOrganizationHorizontal16FilledIcon],svg[fluent-organization-horizontal-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 10.5a2.5 2.5 0 1 1 2.45-3H7V5.367C7 4.612 7.612 4 8.367 4h1.683a2.5 2.5 0 1 1 0 1H8.367A.367.367 0 0 0 8 5.366v5.267c0 .203.164.367.367.367h1.683a2.5 2.5 0 1 1 0 1H8.367A1.367 1.367 0 0 1 7 10.633V8.501H5.95A2.5 2.5 0 0 1 3.5 10.5"></svg:path>`,
})
export class FluentOrganizationHorizontal16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
