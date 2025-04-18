import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentExpandUpRight28FilledIcon],svg[fluent-expand-up-right-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 4.5A2.25 2.25 0 0 0 4.5 6.75V14h6.75A2.75 2.75 0 0 1 14 16.75v6.75h7.25a2.25 2.25 0 0 0 2.25-2.25v-5a.75.75 0 0 1 1.5 0v5A3.75 3.75 0 0 1 21.25 25H6.75A3.75 3.75 0 0 1 3 21.25V6.75A3.75 3.75 0 0 1 6.75 3h5a.75.75 0 0 1 0 1.5zm8.75-.75a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 .75.75v8a.75.75 0 1 1-1.5 0V5.56l-6.22 6.22a.75.75 0 1 1-1.06-1.06l6.22-6.22h-6.19a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class FluentExpandUpRight28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
