import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWarningLockOpen20FilledIcon],svg[fluent-warning-lock-open-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.32 1.786c-.569-1.048-2.072-1.048-2.64 0l-6.502 12a1.5 1.5 0 0 0 1.32 2.215H11V14a2 2 0 0 1 2-2h2c0-.408.081-.796.229-1.15zM9.5 6.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 1 0m.25 6.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m6.25-.801V13h-3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1v-1a1 1 0 1 1 2 0a.5.5 0 1 0 1 0a2 2 0 0 0-4-.051M16.25 16a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"></svg:path>`,
})
export class FluentWarningLockOpen20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
