import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowDown28RegularIcon],svg[fluent-arrow-down-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.792 15.267a.75.75 0 1 0-1.082-1.04L14.752 22.5V3.748a.75.75 0 0 0-1.5 0V22.5l-7.959-8.273a.75.75 0 0 0-1.08 1.04l9.069 9.428a1 1 0 0 0 1.441 0z"></svg:path>`,
})
export class FluentArrowDown28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
