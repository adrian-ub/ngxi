import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowTurnRightDown48FilledIcon],svg[fluent-arrow-turn-right-down-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 13a1.5 1.5 0 0 1 0-3h18a7.5 7.5 0 0 1 7.5 7.5v17.379l6.44-6.44a1.5 1.5 0 0 1 2.12 2.122l-9 9a1.5 1.5 0 0 1-2.12 0l-9-9a1.5 1.5 0 0 1 2.12-2.122L30 34.88V17.5a4.5 4.5 0 0 0-4.5-4.5z"></svg:path>`,
})
export class FluentArrowTurnRightDown48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
