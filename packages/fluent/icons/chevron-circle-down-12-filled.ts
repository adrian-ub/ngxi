import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChevronCircleDown12FilledIcon],svg[fluent-chevron-circle-down-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1a5 5 0 1 1 0 10A5 5 0 0 1 6 1m1.854 4.854a.5.5 0 1 0-.708-.708L6 6.293L4.854 5.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"></svg:path>`,
})
export class FluentChevronCircleDown12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
