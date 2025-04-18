import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowHookUpRight28RegularIcon],svg[fluent-arrow-hook-up-right-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.84 19.984C8.078 21.22 9.913 22 12.25 22h7a.75.75 0 0 0 0-1.5h-7c-1.989 0-3.426-.656-4.35-1.578A4.82 4.82 0 0 1 6.5 15.5c0-1.251.469-2.494 1.4-3.422c.924-.922 2.361-1.578 4.35-1.578h8.19l-3.22 3.22a.75.75 0 1 0 1.06 1.06l4.5-4.5a.75.75 0 0 0 0-1.06l-4.5-4.5a.75.75 0 1 0-1.06 1.06L20.44 9h-8.19c-2.337 0-4.172.781-5.41 2.016A6.3 6.3 0 0 0 5 15.5c0 1.624.609 3.256 1.84 4.484"></svg:path>`,
})
export class FluentArrowHookUpRight28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
