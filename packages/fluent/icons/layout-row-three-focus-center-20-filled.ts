import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutRowThreeFocusCenter20FilledIcon],svg[fluent-layout-row-three-focus-center-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 14a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3zm3 2a2 2 0 0 1-2-2v-2h12v2a2 2 0 0 1-2 2zm10-8H4V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"></svg:path>`,
})
export class FluentLayoutRowThreeFocusCenter20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
