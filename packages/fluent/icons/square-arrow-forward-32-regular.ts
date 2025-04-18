import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSquareArrowForward32RegularIcon],svg[fluent-square-arrow-forward-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v8.775a9 9 0 0 0-2-1.571V7.5A2.5 2.5 0 0 0 24.5 5h-17A2.5 2.5 0 0 0 5 7.5v17A2.5 2.5 0 0 0 7.5 27h7.204c.428.74.958 1.413 1.571 2H7.5A4.5 4.5 0 0 1 3 24.5zm27 15a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0m-4.72-3.78a.75.75 0 1 0-1.06 1.06L25.44 21H22.5a4.25 4.25 0 0 0-4.25 4.25v.5a.75.75 0 0 0 1.5 0v-.5a2.75 2.75 0 0 1 2.75-2.75h2.94l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06z"></svg:path>`,
})
export class FluentSquareArrowForward32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
