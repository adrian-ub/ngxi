import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutColumnThreeFocusCenter20FilledIcon],svg[fluent-layout-column-three-focus-center-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM4 6a2 2 0 0 1 2-2h2v12H6a2 2 0 0 1-2-2zm8 10V4h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2z"></svg:path>`,
})
export class FluentLayoutColumnThreeFocusCenter20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
