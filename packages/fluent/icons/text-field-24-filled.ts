import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextField24FilledIcon],svg[fluent-text-field-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6.75A3.75 3.75 0 0 1 5.75 3h12.5A3.75 3.75 0 0 1 22 6.75v10.5A3.75 3.75 0 0 1 18.25 21H5.75A3.75 3.75 0 0 1 2 17.25zm10.75.75h2.75v.75a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-.75-.75h-8.5a.75.75 0 0 0-.75.75v1.5a.75.75 0 1 0 1.5 0V7.5h2.75v9h-.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-.5z"></svg:path>`,
})
export class FluentTextField24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
