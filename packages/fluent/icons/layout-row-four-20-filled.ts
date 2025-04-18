import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutRowFour20FilledIcon],svg[fluent-layout-row-four-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 14a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3zm14-1v-2.5H3V13zm0-6v2.5H3V7zm0-1a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3z"></svg:path>`,
})
export class FluentLayoutRowFour20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
