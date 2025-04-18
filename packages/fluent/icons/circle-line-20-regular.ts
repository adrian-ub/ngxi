import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCircleLine20RegularIcon],svg[fluent-circle-line-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.018 9.5h13.964a7 7 0 0 0-13.964 0M2 10a8 8 0 1 1 16 0a8 8 0 0 1-16 0m14.982.5H3.018a7 7 0 0 0 13.964 0"></svg:path>`,
})
export class FluentCircleLine20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
