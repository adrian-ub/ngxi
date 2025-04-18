import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowDown16RegularIcon],svg[fluent-arrow-down-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 2.5a.5.5 0 1 0-1 0v9.697L3.872 8.166a.5.5 0 1 0-.744.668l4.5 5a.5.5 0 0 0 .744 0l4.5-5a.5.5 0 0 0-.744-.668L8.5 12.197z"></svg:path>`,
})
export class FluentArrowDown16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
