import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowDown28FilledIcon],svg[fluent-arrow-down-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.712 15.703a1 1 0 0 0-1.423-1.406l-7.288 7.376V3.998a1 1 0 1 0-2 0v17.673l-7.287-7.374a1 1 0 0 0-1.422 1.406l8.82 8.927a1.25 1.25 0 0 0 1.779 0z"></svg:path>`,
})
export class FluentArrowDown28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
