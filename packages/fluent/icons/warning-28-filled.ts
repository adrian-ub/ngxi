import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWarning28FilledIcon],svg[fluent-warning-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.408 4.172c-1.045-1.896-3.77-1.896-4.815 0L2.35 20.92c-1.011 1.833.314 4.078 2.408 4.078H23.24c2.093 0 3.42-2.245 2.408-4.078zM15 20a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1.75-3.25v-6.5a.75.75 0 0 1 1.5 0v6.5a.75.75 0 0 1-1.5 0"></svg:path>`,
})
export class FluentWarning28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
