import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPeopleLink16FilledIcon],svg[fluent-people-link-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M11.5 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4M6 11.5c0-.98.402-1.865 1.05-2.5H3a1.5 1.5 0 0 0-1.5 1.5v.075s0 2.925 4 2.925q.593-.002 1.073-.08A3.5 3.5 0 0 1 6 11.5M9.5 9a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1zM13 9a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H13a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5zm-4 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5"></svg:path>`,
})
export class FluentPeopleLink16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
