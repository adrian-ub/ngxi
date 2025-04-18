import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDirections28FilledIcon],svg[fluent-directions-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.098 16.651a3.75 3.75 0 0 1 0-5.303l8.25-8.25a3.75 3.75 0 0 1 5.303 0l8.25 8.25a3.75 3.75 0 0 1 0 5.303l-8.25 8.25a3.75 3.75 0 0 1-5.303 0zM15.78 8.22a.75.75 0 1 0-1.06 1.06l1.22 1.22h-1.69a3.75 3.75 0 0 0-3.75 3.75v4a.75.75 0 0 0 1.5 0v-4A2.25 2.25 0 0 1 14.25 12h1.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06z"></svg:path>`,
})
export class FluentDirections28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
