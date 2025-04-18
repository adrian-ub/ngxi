import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDialpad48FilledIcon],svg[fluent-dialpad-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 11.5a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6m10.5-20a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6m10.5-30a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path>`,
})
export class FluentDialpad48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
