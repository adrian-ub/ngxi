import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowUp16RegularIcon],svg[fluent-arrow-up-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 13.5a.5.5 0 0 0 1 0V3.803l3.628 4.031a.5.5 0 0 0 .744-.668l-4.5-5a.5.5 0 0 0-.744 0l-4.5 5a.5.5 0 0 0 .744.668L7.5 3.803z"></svg:path>`,
})
export class FluentArrowUp16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
