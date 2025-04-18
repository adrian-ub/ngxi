import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentOrganization16FilledIcon],svg[fluent-organization-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 3.5a2.5 2.5 0 1 1 3 2.45V7h2.134C11.388 7 12 7.612 12 8.367v1.683a2.5 2.5 0 1 1-1 0V8.367A.367.367 0 0 0 10.634 8H5.367A.367.367 0 0 0 5 8.367v1.683a2.5 2.5 0 1 1-1 0V8.367C4 7.612 4.612 7 5.367 7H7.5V5.95a2.5 2.5 0 0 1-2-2.45"></svg:path>`,
})
export class FluentOrganization16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
