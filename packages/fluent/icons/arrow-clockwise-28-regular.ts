import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowClockwise28RegularIcon],svg[fluent-arrow-clockwise-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 14A9.5 9.5 0 0 1 14 4.5a9.47 9.47 0 0 1 6.928 3H18.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 0-1.5 0v1.703A10.96 10.96 0 0 0 14 3C7.925 3 3 7.925 3 14s4.925 11 11 11s11-4.925 11-11q0-.68-.08-1.34a.75.75 0 1 0-1.49.18q.07.57.07 1.16a9.5 9.5 0 0 1-19 0"></svg:path>`,
})
export class FluentArrowClockwise28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
