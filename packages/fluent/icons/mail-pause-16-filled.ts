import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailPause16FilledIcon],svg[fluent-mail-pause-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 10.4c-.75.384-1.6.6-2.5.6c-.65 0-1.273-.113-1.852-.32l-1.41.76a.5.5 0 0 1-.475 0L1 8.337V13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM5.022 5H3a2 2 0 0 0-2 2v.201l6 3.231l.544-.293A5.5 5.5 0 0 1 5.022 5m5.478 5a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m-1-6.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 1 0m3 0v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 1 0"></svg:path>`,
})
export class FluentMailPause16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
