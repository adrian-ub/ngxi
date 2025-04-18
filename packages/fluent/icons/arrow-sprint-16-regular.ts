import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowSprint16RegularIcon],svg[fluent-arrow-sprint-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4a3.5 3.5 0 0 1 3.163 5H10a2.5 2.5 0 1 0-2 1h5.293l-.647-.646a.5.5 0 0 1 .708-.708l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708-.708l.647-.646H8a3.5 3.5 0 1 1 0-7m-3.742 6c.253.378.561.715.913 1H2.5a.5.5 0 0 1 0-1z"></svg:path>`,
})
export class FluentArrowSprint16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
