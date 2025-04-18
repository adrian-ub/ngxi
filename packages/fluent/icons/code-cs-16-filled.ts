import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCodeCs16FilledIcon],svg[fluent-code-cs-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 5.25A1.25 1.25 0 0 0 2.25 6.5v3a1.25 1.25 0 1 0 2.5 0a.75.75 0 0 1 1.5 0a2.75 2.75 0 0 1-5.5 0v-3a2.75 2.75 0 1 1 5.5 0a.75.75 0 0 1-1.5 0A1.25 1.25 0 0 0 3.5 5.25m6-1a.75.75 0 0 1 .75.75v.75h1.5V5a.75.75 0 0 1 1.5 0v.75h1a.75.75 0 0 1 0 1.5h-1v1.5h1a.75.75 0 0 1 0 1.5h-1V11a.75.75 0 0 1-1.5 0v-.75h-1.5V11a.75.75 0 0 1-1.5 0v-.75H8a.75.75 0 0 1 0-1.5h.75v-1.5H8a.75.75 0 0 1 0-1.5h.75V5a.75.75 0 0 1 .75-.75m.75 3v1.5h1.5v-1.5z"></svg:path>`,
})
export class FluentCodeCs16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
