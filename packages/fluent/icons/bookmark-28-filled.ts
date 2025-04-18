import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBookmark28FilledIcon],svg[fluent-bookmark-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.25 3.5A3.25 3.25 0 0 0 6 6.75v18a.75.75 0 0 0 1.203.598L14 20.19l6.797 5.157A.75.75 0 0 0 22 24.75v-18a3.25 3.25 0 0 0-3.25-3.25z"></svg:path>`,
})
export class FluentBookmark28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
