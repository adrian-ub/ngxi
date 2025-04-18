import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutRowThreeFocusBottom20FilledIcon],svg[fluent-layout-row-three-focus-bottom-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 17a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3zm10-9H4v4h12zm0-1V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v1z"></svg:path>`,
})
export class FluentLayoutRowThreeFocusBottom20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
