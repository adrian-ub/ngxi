import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRhombus32FilledIcon],svg[fluent-rhombus-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.524 5a3.25 3.25 0 0 0-3.018 2.043l-6.2 15.5C.452 24.678 2.024 27 4.324 27h17.153a3.25 3.25 0 0 0 3.017-2.043l6.2-15.5C31.548 7.322 29.976 5 27.677 5z"></svg:path>`,
})
export class FluentRhombus32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
