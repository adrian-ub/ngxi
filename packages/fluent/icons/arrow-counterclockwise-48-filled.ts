import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowCounterclockwise48FilledIcon],svg[fluent-arrow-counterclockwise-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M39 24c0-8.284-6.716-15-15-15c-3.938 0-7.52 1.516-10.198 4H17.5a1.5 1.5 0 0 1 0 3h-7A1.5 1.5 0 0 1 9 14.5v-7a1.5 1.5 0 1 1 3 0v3.084A17.94 17.94 0 0 1 24 6c9.941 0 18 8.059 18 18s-8.059 18-18 18S6 33.941 6 24q.001-1.39.205-2.725a1.5 1.5 0 1 1 2.966.45Q9.001 22.837 9 24c0 8.284 6.716 15 15 15s15-6.716 15-15"></svg:path>`,
})
export class FluentArrowCounterclockwise48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
