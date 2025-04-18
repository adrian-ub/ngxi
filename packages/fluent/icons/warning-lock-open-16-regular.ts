import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWarningLockOpen16RegularIcon],svg[fluent-warning-lock-open-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.219 2.125l3.783 6.77c.017-.495.154-.96.382-1.365L8.092 1.637a1.25 1.25 0 0 0-2.182 0L1.157 10.14A1.25 1.25 0 0 0 2.247 12H7v-1H2.248a.25.25 0 0 1-.218-.372l4.752-8.502a.25.25 0 0 1 .437 0M6.5 7a.5.5 0 1 0 1 0V4.5a.5.5 0 0 0-1 0zM14 7a2 2 0 0 0-2 2v1H9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1V9a1 1 0 1 1 2 0a.5.5 0 0 0 1 0a2 2 0 0 0-2-2m-1.75 6a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M7 10a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5"></svg:path>`,
})
export class FluentWarningLockOpen16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
