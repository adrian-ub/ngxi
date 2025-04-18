import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentExpandUpLeft28RegularIcon],svg[fluent-expand-up-left-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.5 6.75a2.25 2.25 0 0 0-2.25-2.25h-5a.75.75 0 0 1 0-1.5h5A3.75 3.75 0 0 1 25 6.75v14.5A3.75 3.75 0 0 1 21.25 25H6.75A3.75 3.75 0 0 1 3 21.25v-5a.75.75 0 0 1 1.5 0v5a2.25 2.25 0 0 0 2.25 2.25H14v-6.75A2.75 2.75 0 0 1 16.75 14h6.75zm0 8.75h-6.75c-.69 0-1.25.56-1.25 1.25v6.75h5.75a2.25 2.25 0 0 0 2.25-2.25zm-11-11.75a.75.75 0 0 0-.75-.75h-8a.75.75 0 0 0-.75.75v8a.75.75 0 0 0 1.5 0V5.56l6.22 6.22a.75.75 0 1 0 1.06-1.06L5.56 4.5h6.19a.75.75 0 0 0 .75-.75"></svg:path>`,
})
export class FluentExpandUpLeft28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
