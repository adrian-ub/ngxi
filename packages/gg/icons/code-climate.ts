import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggCodeClimateIcon],svg[gg-code-climate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.495 8.11l-6.364 6.365l1.414 1.414l4.95-4.95l4.95 4.95l1.414-1.414zm5.01 0l-1.973 1.974l1.418 1.41l.555-.555l4.95 4.95l1.414-1.414z"></svg:path>`,
})
export class GgCodeClimateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
