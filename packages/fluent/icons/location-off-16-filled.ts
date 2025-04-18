import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLocationOff16FilledIcon],svg[fluent-location-off-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.582 12.289l2.564 2.565a.5.5 0 0 0 .708-.708l-13-13a.5.5 0 1 0-.708.708L2.99 3.697A5.97 5.97 0 0 0 2 7c0 2.867 1.935 5.506 5.732 7.922a.5.5 0 0 0 .536 0q2.005-1.275 3.313-2.633M8.274 8.98Q8.14 9.001 8 9a2 2 0 0 1-1.981-2.274zM10 7c0 .26-.05.51-.14.738l2.98 2.98Q13.998 8.929 14 7a6 6 0 0 0-9.645-4.766L7.262 5.14A2 2 0 0 1 10 7"></svg:path>`,
})
export class FluentLocationOff16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
