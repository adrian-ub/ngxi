import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextBulletListRtl16FilledIcon],svg[fluent-text-bullet-list-rtl-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.75 5a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m0 4.25a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m-1.25 3a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 0 0-2.5 0M10.25 3a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5zM11 8a.75.75 0 0 0-.75-.75h-8.5a.75.75 0 0 0 0 1.5h8.5A.75.75 0 0 0 11 8m-.75 3.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5z"></svg:path>`,
})
export class FluentTextBulletListRtl16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
