import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowHookDownLeft28RegularIcon],svg[fluent-arrow-hook-down-left-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6.75A.75.75 0 0 1 8.75 6h7c2.337 0 4.262.781 5.5 2.016C22.481 9.244 23 10.876 23 12.5s-.519 3.256-1.75 4.484C20.012 18.22 18.087 19 15.75 19H7.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 1 1 1.06 1.06L7.56 17.5h8.19c1.988 0 3.426-.656 4.35-1.578a4.82 4.82 0 0 0 1.4-3.422a4.82 4.82 0 0 0-1.4-3.422c-.924-.922-2.362-1.578-4.35-1.578h-7A.75.75 0 0 1 8 6.75"></svg:path>`,
})
export class FluentArrowHookDownLeft28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
