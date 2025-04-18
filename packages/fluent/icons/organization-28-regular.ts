import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentOrganization28RegularIcon],svg[fluent-organization-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 1.998a4.25 4.25 0 0 0-.75 8.434V13.5h-4.5a2.25 2.25 0 0 0-2.25 2.25v1.816a4.251 4.251 0 1 0 1.5 0V15.75a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 .75.75v1.816a4.251 4.251 0 1 0 1.5 0V15.75a2.25 2.25 0 0 0-2.25-2.25h-4.5v-3.068A4.251 4.251 0 0 0 14 1.998m-2.75 4.25a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0M4.5 21.75a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0M20.75 19a2.75 2.75 0 1 1 0 5.5a2.75 2.75 0 0 1 0-5.5"></svg:path>`,
})
export class FluentOrganization28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
