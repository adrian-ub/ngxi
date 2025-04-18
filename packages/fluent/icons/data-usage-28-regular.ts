import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataUsage28RegularIcon],svg[fluent-data-usage-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 3A3.75 3.75 0 0 0 3 6.75v14.5A3.75 3.75 0 0 0 6.75 25h14.5A3.75 3.75 0 0 0 25 21.25V6.75A3.75 3.75 0 0 0 21.25 3zM4.5 6.75A2.25 2.25 0 0 1 6.75 4.5h14.5a2.25 2.25 0 0 1 2.25 2.25v14.5a2.25 2.25 0 0 1-2.25 2.25H6.75a2.25 2.25 0 0 1-2.25-2.25zm5 5a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0zM14 14a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 14 14m6-5.25a.75.75 0 0 0-1.5 0v10.5a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class FluentDataUsage28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
