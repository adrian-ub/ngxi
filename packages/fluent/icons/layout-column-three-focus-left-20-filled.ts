import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutColumnThreeFocusLeft20FilledIcon],svg[fluent-layout-column-three-focus-left-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm9 10V4H8v12zm1 0h1a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1z"></svg:path>`,
})
export class FluentLayoutColumnThreeFocusLeft20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
