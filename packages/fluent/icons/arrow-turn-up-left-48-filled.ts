import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowTurnUpLeft48FilledIcon],svg[fluent-arrow-turn-up-left-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M35 40.5a1.5 1.5 0 0 0 3 0v-18a7.5 7.5 0 0 0-7.5-7.5H13.121l6.44-6.44a1.5 1.5 0 0 0-2.122-2.12l-9 9a1.5 1.5 0 0 0 0 2.12l9 9a1.5 1.5 0 0 0 2.122-2.12L13.12 18H30.5a4.5 4.5 0 0 1 4.5 4.5z"></svg:path>`,
})
export class FluentArrowTurnUpLeft48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
