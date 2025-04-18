import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChevronCircleDown12RegularIcon],svg[fluent-chevron-circle-down-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.854 5.854a.5.5 0 1 0-.708-.708L6 6.293L4.854 5.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0zM11 6A5 5 0 1 0 1 6a5 5 0 0 0 10 0M6 2a4 4 0 1 1 0 8a4 4 0 0 1 0-8"></svg:path>`,
})
export class FluentChevronCircleDown12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
