import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTooltipIcon],svg[grommet-icons-tooltip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M16.5 18L12 22.5L7.5 18H1V1h22v17zM6 10h1V9H6zm5.5 0h1V9h-1zm5.5 0h1V9h-1z"></svg:path>`,
})
export class GrommetIconsTooltipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
