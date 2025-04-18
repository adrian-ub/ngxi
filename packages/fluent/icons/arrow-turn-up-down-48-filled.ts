import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowTurnUpDown48FilledIcon],svg[fluent-arrow-turn-up-down-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.894 39.057a1.5 1.5 0 1 1-2.787-1.113L20.702 6.392c.83-2.078 3.76-2.104 4.627-.042l12.293 29.258l3.513-7.728a1.5 1.5 0 0 1 2.73 1.241l-5 11a1.5 1.5 0 0 1-1.942.764l-12-5a1.5 1.5 0 1 1 1.154-2.77l8.781 3.66L23.036 8.637z"></svg:path>`,
})
export class FluentArrowTurnUpDown48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
