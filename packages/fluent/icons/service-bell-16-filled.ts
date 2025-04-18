import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentServiceBell16FilledIcon],svg[fluent-service-bell-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1.5a2 2 0 0 0-2 2v.341C3.67 4.665 2 6.888 2 9.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5a6 6 0 0 0-4-5.659V3.5a2 2 0 0 0-2-2M7.5 6a.5.5 0 0 1 .5-.5c1.36 0 2.56.679 3.283 1.714a.5.5 0 1 1-.82.572A3 3 0 0 0 8 6.5a.5.5 0 0 1-.5-.5m-5 5a1.5 1.5 0 0 0 0 3h11a1.5 1.5 0 0 0 0-3z"></svg:path>`,
})
export class FluentServiceBell16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
