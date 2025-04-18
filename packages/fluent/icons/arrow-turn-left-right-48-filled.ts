import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowTurnLeftRight48FilledIcon],svg[fluent-arrow-turn-left-right-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40.057 9.894a1.5 1.5 0 0 0-1.113-2.787L7.392 19.702c-2.078.83-2.104 3.76-.042 4.627l29.258 12.293l-7.728 3.513a1.5 1.5 0 0 0 1.241 2.73l11-5a1.5 1.5 0 0 0 .764-1.942l-5-12a1.5 1.5 0 1 0-2.77 1.154l3.66 8.781L9.637 22.036z"></svg:path>`,
})
export class FluentArrowTurnLeftRight48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
