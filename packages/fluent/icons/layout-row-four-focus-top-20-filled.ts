import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutRowFourFocusTop20FilledIcon],svg[fluent-layout-row-four-focus-top-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 14a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3zm3 2a2 2 0 0 1-2-2v-.5h12v.5a2 2 0 0 1-2 2zm10-3.5H4V10h12zm0-6V9H4V6.5z"></svg:path>`,
})
export class FluentLayoutRowFourFocusTop20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
