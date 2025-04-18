import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowExit12RegularIcon],svg[fluent-arrow-exit-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3.5a.5.5 0 0 0 0-1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1zm4.854 1.646a.5.5 0 1 0-.708.708L9.293 5.5H5a.5.5 0 0 0 0 1h4.293L8.146 7.646a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708z"></svg:path>`,
})
export class FluentArrowExit12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
