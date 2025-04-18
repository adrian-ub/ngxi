import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextBulletListSquare28RegularIcon],svg[fluent-text-bullet-list-square-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 9.25a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75m.75 4.25a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM12 19.25a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75M8.75 10.5a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5M10 14.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M8.75 20.5a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5M3 6.75A3.75 3.75 0 0 1 6.75 3h14.5A3.75 3.75 0 0 1 25 6.75v14.5A3.75 3.75 0 0 1 21.25 25H6.75A3.75 3.75 0 0 1 3 21.25zM6.75 4.5A2.25 2.25 0 0 0 4.5 6.75v14.5a2.25 2.25 0 0 0 2.25 2.25h14.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25z"></svg:path>`,
})
export class FluentTextBulletListSquare28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
