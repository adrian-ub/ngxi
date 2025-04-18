import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsAdjustHorizontalAltOutlineIcon],svg[teenyicons-adjust-horizontal-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M15 3.5H6.5m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H0m15 8h-2.5m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H0"></svg:path>`,
})
export class TeenyiconsAdjustHorizontalAltOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
