import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCenterVertical24RegularIcon],svg[fluent-center-vertical-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3.75a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1 0-1.5h16.5a.75.75 0 0 1 .75.75m0 16.5a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1 0-1.5h16.5a.75.75 0 0 1 .75.75M7.25 8A2.25 2.25 0 0 0 5 10.25v3.5A2.25 2.25 0 0 0 7.25 16h9.5A2.25 2.25 0 0 0 19 13.75v-3.5A2.25 2.25 0 0 0 16.75 8zm-.75 2.25a.75.75 0 0 1 .75-.75h9.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75h-9.5a.75.75 0 0 1-.75-.75z"></svg:path>`,
})
export class FluentCenterVertical24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
