import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailDataBar16FilledIcon],svg[fluent-mail-data-bar-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v.201l-1.57.845a2 2 0 0 0-2.299 1.238l-2.13 1.148L2 5.202zm8 3.491l-1.763.95a.5.5 0 0 1-.474 0L2 6.336V11a2 2 0 0 0 2 2h3v-1a2 2 0 0 1 3-1.732zM12 7a1 1 0 0 0-1 1v7a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1m3 2a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-5a1 1 0 0 0-1-1m-7 3a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0z"></svg:path>`,
})
export class FluentMailDataBar16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
