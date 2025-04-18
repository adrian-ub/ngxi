import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowLeft28RegularIcon],svg[fluent-arrow-left-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.735 4.21a.75.75 0 0 1 1.04 1.08L5.5 13.25h18.753a.75.75 0 0 1 0 1.5H5.501l8.274 7.959a.75.75 0 0 1-1.04 1.08L3.307 14.72a1 1 0 0 1 0-1.441z"></svg:path>`,
})
export class FluentArrowLeft28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
