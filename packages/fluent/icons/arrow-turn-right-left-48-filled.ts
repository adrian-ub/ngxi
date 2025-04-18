import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowTurnRightLeft48FilledIcon],svg[fluent-arrow-turn-right-left-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.944 9.894a1.5 1.5 0 0 1 1.112-2.787L41.61 19.702c2.078.83 2.104 3.76.042 4.627L12.393 36.622l7.728 3.513a1.5 1.5 0 0 1-1.241 2.73l-11-5a1.5 1.5 0 0 1-.764-1.942l5-12a1.5 1.5 0 0 1 2.769 1.154l-3.659 8.781l28.137-11.822z"></svg:path>`,
})
export class FluentArrowTurnRightLeft48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
