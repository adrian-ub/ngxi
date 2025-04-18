import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDatabase16FilledIcon],svg[fluent-database-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3.5C13 4.88 10.761 6 8 6S3 4.88 3 3.5S5.239 1 8 1s5 1.12 5 2.5m-10 9V5.487C4.057 6.413 5.864 7 8 7s3.943-.587 5-1.513V12.5c0 1.425-2.149 2.5-5 2.5s-5-1.075-5-2.5"></svg:path>`,
})
export class FluentDatabase16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
