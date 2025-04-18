import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowCounterclockwise28RegularIcon],svg[fluent-arrow-counterclockwise-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.5 14A9.5 9.5 0 0 0 14 4.5a9.47 9.47 0 0 0-6.928 3H9.75a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 5 8.25v-4a.75.75 0 0 1 1.5 0v1.703A10.96 10.96 0 0 1 14 3c6.075 0 11 4.925 11 11s-4.925 11-11 11S3 20.075 3 14q0-.68.08-1.34a.75.75 0 1 1 1.49.18q-.07.57-.07 1.16a9.5 9.5 0 0 0 19 0"></svg:path>`,
})
export class FluentArrowCounterclockwise28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
