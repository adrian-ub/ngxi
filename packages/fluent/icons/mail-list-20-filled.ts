import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailList20FilledIcon],svg[fluent-mail-list-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm-7-2h5.585a1.5 1.5 0 0 0 .297 1.5A1.5 1.5 0 0 0 11.5 8h3.464L10 10.92L2.015 6.223A2.5 2.5 0 0 1 4.5 4m5.754 7.931L16.934 8h.566q.264-.001.5-.085V14.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5V7.373l7.747 4.558a.5.5 0 0 0 .507 0"></svg:path>`,
})
export class FluentMailList20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
