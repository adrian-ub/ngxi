import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDatabaseStack16FilledIcon],svg[fluent-database-stack-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5.487V8c0 1.355 2.29 2.5 5 2.5s5-1.145 5-2.5V5.487C11.943 6.413 10.136 7 8 7s-3.943-.587-5-1.513M8 6c2.761 0 5-1.119 5-2.5S10.761 1 8 1S3 2.119 3 3.5S5.239 6 8 6M3 9.959V12.5C3 13.925 5.149 15 8 15s5-1.075 5-2.5V9.959c-1.066.936-2.889 1.541-5 1.541s-3.934-.606-5-1.541"></svg:path>`,
})
export class FluentDatabaseStack16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
