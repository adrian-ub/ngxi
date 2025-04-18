import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCodeTextOff16FilledIcon],svg[fluent-code-text-off-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.25 7h-3a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 0 1.5m-3.5-3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5m-1 7.5h-7a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5m-2-7.5a.75.75 0 0 0 0-1.5H4.622l1.5 1.5zm8.104 10.145l-13-12.999a.5.5 0 0 0-.708.707l.646.646H1.75a.75.75 0 0 0 0 1.5h1.542l1.5 1.5H4.75a.75.75 0 0 0 0 1.5h1.542l1.5 1.5H3.75a.75.75 0 0 0 0 1.5h5.542l4.854 4.854a.5.5 0 0 0 .708 0a.5.5 0 0 0 0-.708"></svg:path>`,
})
export class FluentCodeTextOff16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
