import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentOrganization28FilledIcon],svg[fluent-organization-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.75 6.248a4.25 4.25 0 1 1 5 4.184V13.5h4.5a2.25 2.25 0 0 1 2.25 2.25v1.816a4.251 4.251 0 1 1-1.5 0V15.75a.75.75 0 0 0-.75-.75H8.75a.75.75 0 0 0-.75.75v1.816a4.251 4.251 0 1 1-1.5 0V15.75a2.25 2.25 0 0 1 2.25-2.25h4.5v-3.068a4.25 4.25 0 0 1-3.5-4.184"></svg:path>`,
})
export class FluentOrganization28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
