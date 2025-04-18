import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTimer28RegularIcon],svg[fluent-timer-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.75 3a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zM14 9.5a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6A.75.75 0 0 1 14 9.5M14 6C8.477 6 4 10.477 4 16s4.477 10 10 10s10-4.477 10-10S19.523 6 14 6M5.5 16a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0m16.78-9.78a.75.75 0 1 0-1.06 1.06l1.5 1.5a.75.75 0 1 0 1.06-1.06z"></svg:path>`,
})
export class FluentTimer28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
