import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataLine20RegularIcon],svg[fluent-data-line-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 4a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M13 5.5a2.5 2.5 0 1 1 1.557 2.316l-1.282 1.923a2.5 2.5 0 1 1-3.83 3.185l-2.496 1.07q.05.246.051.506a2.5 2.5 0 1 1-.445-1.424l2.496-1.07a2.5 2.5 0 0 1 3.392-2.822l1.282-1.923A2.5 2.5 0 0 1 13 5.5m-3 6a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0m-7 3a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"></svg:path>`,
})
export class FluentDataLine20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
