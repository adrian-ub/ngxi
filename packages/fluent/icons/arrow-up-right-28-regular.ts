import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowUpRight28RegularIcon],svg[fluent-arrow-up-right-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.22 24.78a.75.75 0 0 1 0-1.06L22.44 4.5h-9.69a.75.75 0 0 1 0-1.5h11.5a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-1.5 0V5.56L4.28 24.78a.75.75 0 0 1-1.06 0"></svg:path>`,
})
export class FluentArrowUpRight28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
