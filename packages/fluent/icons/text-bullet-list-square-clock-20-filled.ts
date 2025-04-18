import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextBulletListSquareClock20FilledIcon],svg[fluent-text-bullet-list-square-clock-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 3A2.75 2.75 0 0 0 3 5.75v8.5A2.75 2.75 0 0 0 5.75 17H9.6a5.5 5.5 0 0 1-.6-2.5c0-1.33.472-2.55 1.257-3.5H9.5a.5.5 0 0 1 0-1h1.837c.895-.63 1.986-1 3.163-1c.9 0 1.75.216 2.5.6V5.75A2.75 2.75 0 0 0 14.25 3zM7.5 7.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M6.75 9.5a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m.75 3.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M9.5 8a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1zm5 11a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m-.5-6.5a.5.5 0 0 1 1 0V14h1a.5.5 0 0 1 0 1h-1.5a.5.5 0 0 1-.5-.5z"></svg:path>`,
})
export class FluentTextBulletListSquareClock20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
