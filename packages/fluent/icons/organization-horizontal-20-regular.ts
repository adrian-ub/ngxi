import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentOrganizationHorizontal20RegularIcon],svg[fluent-organization-horizontal-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 10a3 3 0 0 0 5.96.5H9.5v3A1.5 1.5 0 0 0 11 15h1.042a3.001 3.001 0 1 0 0-1H11a.5.5 0 0 1-.5-.5v-7A.5.5 0 0 1 11 6h1.042a3.001 3.001 0 1 0 0-1H11a1.5 1.5 0 0 0-1.5 1.5v3H7.96A3.001 3.001 0 0 0 2 10m3 2a2 2 0 1 1 0-4a2 2 0 0 1 0 4m10 4.5a2 2 0 1 1 0-4.002a2 2 0 0 1 0 4.001M13 5.498a2 2 0 1 1 4.001 0a2 2 0 0 1-4.001 0"></svg:path>`,
})
export class FluentOrganizationHorizontal20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
