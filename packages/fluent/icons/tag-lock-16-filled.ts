import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTagLock16FilledIcon],svg[fluent-tag-lock-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.536 6.327L6.296 1.6a2.02 2.02 0 0 1 1.415-.585L10.975 1a2.007 2.007 0 0 1 2.021 2.014L12.98 5.39A3 3 0 0 0 8.5 8v.064A2 2 0 0 0 7 10v2.894a2.02 2.02 0 0 1-2.154-.45l-3.31-3.288a1.99 1.99 0 0 1 0-2.829m7.728-1.669a.774.774 0 0 0 1.09 0c.3-.298.3-.783 0-1.082a.774.774 0 0 0-1.09 0c-.3.3-.3.784 0 1.082M9.5 8v1H9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5V8a2 2 0 1 0-4 0m1 1V8a1 1 0 1 1 2 0v1zm1 2.25a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5"></svg:path>`,
})
export class FluentTagLock16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
