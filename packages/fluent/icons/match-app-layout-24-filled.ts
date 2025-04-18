import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMatchAppLayout24FilledIcon],svg[fluent-match-app-layout-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 8c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 9.5 16H3.75A1.75 1.75 0 0 1 2 14.25v-4.5a1.75 1.75 0 0 1 1.606-1.744L3.75 8zm10.75 0c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 20.25 16H14.5a1.75 1.75 0 0 1-1.75-1.75v-4.5c0-.966.784-1.75 1.75-1.75z"></svg:path>`,
})
export class FluentMatchAppLayout24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
