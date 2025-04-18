import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHistory28RegularIcon],svg[fluent-history-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4.5a9.5 9.5 0 1 1-9.43 8.34a.75.75 0 0 0-1.49-.18Q3 13.32 3 14c0 6.075 4.925 11 11 11s11-4.925 11-11S20.075 3 14 3a10.96 10.96 0 0 0-7.5 2.953V4.25a.75.75 0 0 0-1.5 0v4c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5H7.072A9.47 9.47 0 0 1 14 4.5m.5 3.25a.75.75 0 0 0-1.5 0v6.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5H14.5z"></svg:path>`,
})
export class FluentHistory28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
