import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWarningLockOpen16FilledIcon],svg[fluent-warning-lock-open-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.092 1.638a1.25 1.25 0 0 0-2.182 0L1.157 10.14A1.25 1.25 0 0 0 2.247 12H7v-1c0-.392.113-.757.307-1.066a.75.75 0 1 1 .412-.47C8.066 9.174 8.513 9 9 9h2c0-.534.14-1.035.384-1.47zM6.5 7V4.5a.5.5 0 0 1 1 0V7a.5.5 0 0 1-1 0M12 9a2 2 0 1 1 4 0a.5.5 0 0 1-1 0a1 1 0 1 0-2 0v1h1c.22 0 .424.071.59.192l.014.011l.007.005l.025.02A1 1 0 0 1 15 11v4a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h3zm-.5 4.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5"></svg:path>`,
})
export class FluentWarningLockOpen16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
