import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTabInPrivate16FilledIcon],svg[fluent-tab-in-private-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-.5 2a.5.5 0 0 1 .5-.5h1.793L3.5 5.793zm0 3.207L7.207 3.5h2.586L3.5 9.793zM11.207 3.5H12a.5.5 0 0 1 .5.5v.793L4.793 12.5H4a.5.5 0 0 1-.5-.5v-.793zM12.5 6.207v2.586L8.793 12.5H6.207zm0 4V12a.5.5 0 0 1-.5.5h-1.793z"></svg:path>`,
})
export class FluentTabInPrivate16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
