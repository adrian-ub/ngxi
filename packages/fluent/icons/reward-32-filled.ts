import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentReward32FilledIcon],svg[fluent-reward-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5v8.154l4.88 2.644a.25.25 0 0 0 .24 0L21 13.154V5zM3 6.25A3.25 3.25 0 0 1 6.25 3h19.5A3.25 3.25 0 0 1 29 6.25v2.314a4.25 4.25 0 0 1-2.226 3.737l-7.986 4.326a6.5 6.5 0 1 1-5.577 0L5.226 12.3A4.25 4.25 0 0 1 3 8.564zm8.5 16.25a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0"></svg:path>`,
})
export class FluentReward32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
