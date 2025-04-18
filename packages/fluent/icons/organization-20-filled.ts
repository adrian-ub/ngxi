import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentOrganization20FilledIcon],svg[fluent-organization-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5a3 3 0 1 1 3.5 2.96V9.5h3A1.5 1.5 0 0 1 15 11v1.041a3.001 3.001 0 1 1-1 0V11a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5v1.041a3.001 3.001 0 1 1-1 0V11a1.5 1.5 0 0 1 1.5-1.5h3V7.96A3 3 0 0 1 7 5"></svg:path>`,
})
export class FluentOrganization20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
