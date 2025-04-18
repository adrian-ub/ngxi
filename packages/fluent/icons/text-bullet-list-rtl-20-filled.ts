import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextBulletListRtl20FilledIcon],svg[fluent-text-bullet-list-rtl-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.75 6a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5M13 4.75a.75.75 0 0 0-.75-.75h-9.5a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 .75-.75M12.25 9a.75.75 0 0 1 0 1.5h-9.5a.75.75 0 0 1 0-1.5zm0 5a.75.75 0 0 1 0 1.5h-9.5a.75.75 0 0 1 0-1.5zm3.25-4.25a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 0 0-2.5 0M16.75 16a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5"></svg:path>`,
})
export class FluentTextBulletListRtl20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
