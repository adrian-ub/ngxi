import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentOrganizationHorizontal24FilledIcon],svg[fluent-organization-horizontal-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.748 16.002A3.752 3.752 0 1 1 9.426 11.5h2.072V8.25A2.25 2.25 0 0 1 13.748 6h.825a3.753 3.753 0 1 1 0 1.5h-.825a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75h.825a3.753 3.753 0 1 1 0 1.5h-.825a2.25 2.25 0 0 1-2.25-2.25V13H9.426a3.754 3.754 0 0 1-3.678 3.002"></svg:path>`,
})
export class FluentOrganizationHorizontal24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
