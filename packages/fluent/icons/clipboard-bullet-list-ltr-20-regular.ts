import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentClipboardBulletListLtr20RegularIcon],svg[fluent-clipboard-bullet-list-ltr-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 8.5a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H9.5a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H9.5a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H9.5a.5.5 0 0 1-.5-.5m-1-6a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m0 3a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-.75 3.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M7.085 3A1.5 1.5 0 0 1 8.5 2h3a1.5 1.5 0 0 1 1.415 1H14.5A1.5 1.5 0 0 1 16 4.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5v-12A1.5 1.5 0 0 1 5.5 3zM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM7.085 4H5.5a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5h-1.585A1.5 1.5 0 0 1 11.5 5h-3a1.5 1.5 0 0 1-1.415-1"></svg:path>`,
})
export class FluentClipboardBulletListLtr20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
