import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowTurnRight48FilledIcon],svg[fluent-arrow-turn-right-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30.56 26.56a1.5 1.5 0 0 1-2.12-2.12L34.877 18H17.5a4.5 4.5 0 0 0-4.5 4.5v18a1.5 1.5 0 1 1-3 0v-18a7.5 7.5 0 0 1 7.5-7.5h17.38l-6.44-6.44a1.5 1.5 0 0 1 2.12-2.12l9 9a1.5 1.5 0 0 1 0 2.12z"></svg:path>`,
})
export class FluentArrowTurnRight48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
