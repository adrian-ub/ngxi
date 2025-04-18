import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPeopleAdd28FilledIcon],svg[fluent-people-add-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 13a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m14-3.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0M2 17.25A2.25 2.25 0 0 1 4.25 15h10.5q.298.001.573.074A7.48 7.48 0 0 0 13 20.5c0 .665.086 1.309.249 1.922c-.975.355-2.203.578-3.749.578C2 23 2 17.75 2 17.75zm25 3.25a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0m-6-4a.5.5 0 0 0-1 0V20h-3.5a.5.5 0 0 0 0 1H20v3.5a.5.5 0 0 0 1 0V21h3.5a.5.5 0 0 0 0-1H21z"></svg:path>`,
})
export class FluentPeopleAdd28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
