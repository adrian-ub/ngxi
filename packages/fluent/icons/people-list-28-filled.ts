import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPeopleList28FilledIcon],svg[fluent-people-list-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 14a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m14-3.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0M2 18.25A2.25 2.25 0 0 1 4.25 16h10.5q.355.001.678.104a1.75 1.75 0 0 0 .42 2.646a1.75 1.75 0 0 0-.052 2.967a5 5 0 0 1-.178.199a2 2 0 0 0-.206.205C14.337 23.143 12.53 24 9.5 24C2 24 2 18.75 2 18.75zm14.75-1.75a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zm0 3a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zm0 3a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentPeopleList28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
