import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowOutlineDownLeft28FilledIcon],svg[fluent-arrow-outline-down-left-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.544 2.659a2.25 2.25 0 0 0-3.182 0L8.76 9.262l-1.6-1.6C5.81 6.313 3.5 7.149 3.328 9.049L2.009 23.546a2.25 2.25 0 0 0 2.445 2.445l14.5-1.318c1.9-.173 2.736-2.483 1.387-3.832l-1.602-1.601l6.602-6.602a2.25 2.25 0 0 0 0-3.182z"></svg:path>`,
})
export class FluentArrowOutlineDownLeft28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
