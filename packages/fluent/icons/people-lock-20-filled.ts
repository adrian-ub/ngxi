import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPeopleLock20FilledIcon],svg[fluent-people-lock-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5.75a3.25 3.25 0 1 1-6.5 0a3.25 3.25 0 0 1 6.5 0m1 8.699C10.262 15.279 8.98 16 6.75 16C1.5 16 1.5 12 1.5 12a2 2 0 0 1 2-2H10a2 2 0 0 1 2 2s0 .105-.022.28A2 2 0 0 0 11 14zM14.5 9a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m-1 3v1H13a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-1a2 2 0 1 0-4 0m1 1v-1a1 1 0 1 1 2 0v1zm1 2.25a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5"></svg:path>`,
})
export class FluentPeopleLock20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
