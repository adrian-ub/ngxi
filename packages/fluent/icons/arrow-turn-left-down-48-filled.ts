import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowTurnLeftDown48FilledIcon],svg[fluent-arrow-turn-left-down-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40.5 13a1.5 1.5 0 0 0 0-3h-18a7.5 7.5 0 0 0-7.5 7.5v17.379l-6.44-6.44a1.5 1.5 0 0 0-2.12 2.122l9 9a1.5 1.5 0 0 0 2.12 0l9-9a1.5 1.5 0 0 0-2.12-2.122L18 34.88V17.5a4.5 4.5 0 0 1 4.5-4.5z"></svg:path>`,
})
export class FluentArrowTurnLeftDown48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
