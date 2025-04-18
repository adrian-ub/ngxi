import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentOrganization24FilledIcon],svg[fluent-organization-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.998 5.75A3.752 3.752 0 1 1 12.5 9.428V11.5h3.25A2.25 2.25 0 0 1 18 13.75v.825a3.754 3.754 0 0 1-.748 7.43a3.752 3.752 0 0 1-.752-7.43v-.825a.75.75 0 0 0-.75-.75h-8a.75.75 0 0 0-.75.75v.825a3.754 3.754 0 0 1-.748 7.43a3.752 3.752 0 0 1-.752-7.43v-.825a2.25 2.25 0 0 1 2.25-2.25H11V9.428A3.754 3.754 0 0 1 7.998 5.75"></svg:path>`,
})
export class FluentOrganization24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
