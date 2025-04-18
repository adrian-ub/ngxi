import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentReward24FilledIcon],svg[fluent-reward-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.25 1.999c.966 0 1.75.784 1.75 1.75v3.043a2.75 2.75 0 0 1-1.477 2.437l-6.3 3.29A5 5 0 0 1 12 22a5 5 0 0 1-2.223-9.48l-6.3-3.29A2.75 2.75 0 0 1 2 6.792V3.749c0-.966.784-1.75 1.75-1.75zM12 13.499a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7m4-10H7.997v6.398l3.887 2.03a.25.25 0 0 0 .232 0L16 9.899z"></svg:path>`,
})
export class FluentReward24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
