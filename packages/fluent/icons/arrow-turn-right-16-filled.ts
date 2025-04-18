import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowTurnRight16FilledIcon],svg[fluent-arrow-turn-right-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.72 1.72a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 0 1-1.06-1.06l2.22-2.22H5.75c-.69 0-1.25.56-1.25 1.25v5.5a.75.75 0 0 1-1.5 0v-5.5A2.75 2.75 0 0 1 5.75 5h5.19L8.72 2.78a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class FluentArrowTurnRight16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
