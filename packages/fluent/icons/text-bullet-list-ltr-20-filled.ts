import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextBulletListLtr20FilledIcon],svg[fluent-text-bullet-list-ltr-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.25 6a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5M7 4.75A.75.75 0 0 1 7.75 4h9.5a.75.75 0 0 1 0 1.5h-9.5A.75.75 0 0 1 7 4.75M7.75 9a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zM4.5 9.75a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M3.25 16a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5"></svg:path>`,
})
export class FluentTextBulletListLtr20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
