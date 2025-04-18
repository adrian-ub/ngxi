import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWindowText28RegularIcon],svg[fluent-window-text-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.25 3H6.75A3.75 3.75 0 0 0 3 6.75v14.5A3.75 3.75 0 0 0 6.75 25h14.5A3.75 3.75 0 0 0 25 21.25V6.75A3.75 3.75 0 0 0 21.25 3M4.5 21.25V9.5h19v11.75a2.25 2.25 0 0 1-2.25 2.25H6.75a2.25 2.25 0 0 1-2.25-2.25m19-14.5V8h-19V6.75A2.25 2.25 0 0 1 6.75 4.5h14.5a2.25 2.25 0 0 1 2.25 2.25M6.75 12.5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5zm0 3.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm11 0a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zM6.75 19a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zm6.5 0a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentWindowText28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
