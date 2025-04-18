import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowClockwise12FilledIcon],svg[fluent-arrow-clockwise-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 2A.75.75 0 0 0 9 2v.646a4.5 4.5 0 1 0 1.42 4.206c.088-.465-.304-.852-.777-.852c-.355 0-.636.291-.711.638a3.001 3.001 0 1 1-1.266-3.133H7.25a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 .75-.75z"></svg:path>`,
})
export class FluentArrowClockwise12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
