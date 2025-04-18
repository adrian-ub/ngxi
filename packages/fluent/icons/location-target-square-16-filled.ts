import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLocationTargetSquare16FilledIcon],svg[fluent-location-target-square-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2zM6 8a2 2 0 1 1 4 0a2 2 0 0 1-4 0m-.959-.5A3 3 0 0 1 7.5 5.041V4.5a.5.5 0 0 1 1 0v.541A3 3 0 0 1 10.959 7.5h.541a.5.5 0 0 1 0 1h-.541A3 3 0 0 1 8.5 10.959v.541a.5.5 0 0 1-1 0v-.541A3 3 0 0 1 5.041 8.5H4.5a.5.5 0 0 1 0-1zM9 8a1 1 0 1 0-2 0a1 1 0 0 0 2 0"></svg:path>`,
})
export class FluentLocationTargetSquare16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
