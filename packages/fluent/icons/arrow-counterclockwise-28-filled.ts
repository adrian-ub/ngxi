import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowCounterclockwise28FilledIcon],svg[fluent-arrow-counterclockwise-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.342 7A8.96 8.96 0 0 1 14 5a9 9 0 1 1-8.956 8.099a1 1 0 0 0-1.99-.198A11 11 0 0 0 3 14c0 6.075 4.925 11 11 11s11-4.925 11-11S20.075 3 14 3c-2.66 0-5.099.944-7 2.514V4a1 1 0 0 0-2 0v4.029A1 1 0 0 0 6 9h4a1 1 0 1 0 0-2z"></svg:path>`,
})
export class FluentArrowCounterclockwise28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
