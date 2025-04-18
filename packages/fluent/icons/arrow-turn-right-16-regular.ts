import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowTurnRight16RegularIcon],svg[fluent-arrow-turn-right-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.646 1.646a.5.5 0 0 1 .708 0l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 1 1-.708-.708L11.293 6H5.5A1.5 1.5 0 0 0 4 7.5v6a.5.5 0 0 1-1 0v-6A2.5 2.5 0 0 1 5.5 5h5.793L8.646 2.354a.5.5 0 0 1 0-.708"></svg:path>`,
})
export class FluentArrowTurnRight16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
