import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPeople16FilledIcon],svg[fluent-people-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M11.5 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-1 2.594V10.5A2.5 2.5 0 0 0 10 9h3.273c.676 0 1.225.548 1.225 1.225c0 0 0 2.275-3 2.275c-.598 0-1.077-.09-1.46-.235a3.9 3.9 0 0 0 .447-1.413q.009-.093.012-.159zm-1-.094A1.5 1.5 0 0 0 8 9H3a1.5 1.5 0 0 0-1.5 1.5v.075s0 2.925 4 2.925c3.812 0 3.991-2.656 4-2.906z"></svg:path>`,
})
export class FluentPeople16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
