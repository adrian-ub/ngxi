import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowCounterclockwise16RegularIcon],svg[fluent-arrow-counterclockwise-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 8a5 5 0 0 0-9.001-3h2a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v1.531a6 6 0 1 1-1.476 4.513a.5.5 0 0 1 .997-.089A5 5 0 0 0 13 8"></svg:path>`,
})
export class FluentArrowCounterclockwise16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
