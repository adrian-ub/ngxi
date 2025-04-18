import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentOrganizationHorizontal20FilledIcon],svg[fluent-organization-horizontal-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 13a3 3 0 1 1 2.96-3.5H9.5v-3A1.5 1.5 0 0 1 11 5h1.041a3.001 3.001 0 1 1 0 1H11a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h1.041a3.001 3.001 0 1 1 0 1H11a1.5 1.5 0 0 1-1.5-1.5v-3H7.96A3 3 0 0 1 5 13"></svg:path>`,
})
export class FluentOrganizationHorizontal20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
