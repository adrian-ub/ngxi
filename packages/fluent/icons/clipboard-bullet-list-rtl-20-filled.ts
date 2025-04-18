import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentClipboardBulletListRtl20FilledIcon],svg[fluent-clipboard-bullet-list-rtl-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 2h3a1.5 1.5 0 0 1 1.415 1H14.5A1.5 1.5 0 0 1 16 4.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5v-12A1.5 1.5 0 0 1 5.5 3h1.585A1.5 1.5 0 0 1 8.5 2M8 3.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5m4.75 5.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m0 3a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M12 14.5a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0m-1-6a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 .5-.5m0 3a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 .5-.5m0 3a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 .5-.5"></svg:path>`,
})
export class FluentClipboardBulletListRtl20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
