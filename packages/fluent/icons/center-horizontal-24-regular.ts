import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCenterHorizontal24RegularIcon],svg[fluent-center-horizontal-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 3.75a.75.75 0 0 0-1.5 0v16.5a.75.75 0 0 0 1.5 0zm15 0a.75.75 0 0 1 1.5 0v16.5a.75.75 0 0 1-1.5 0zM10.25 5A2.25 2.25 0 0 0 8 7.25v9.5A2.25 2.25 0 0 0 10.25 19h3.5A2.25 2.25 0 0 0 16 16.75v-9.5A2.25 2.25 0 0 0 13.75 5zM9.5 7.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1-.75-.75z"></svg:path>`,
})
export class FluentCenterHorizontal24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
