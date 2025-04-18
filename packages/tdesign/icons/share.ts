import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignShareIcon],svg[tdesign-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.991 1.035a4 4 0 1 1-.855 6.267l-6.28 3.626q.147.533.145 1.072c0 .358-.047.719-.145 1.072l6.28 3.626a4.002 4.002 0 0 1 6.32 4.803a4 4 0 0 1-7.32-3.07l-6.28-3.627a4.002 4.002 0 1 1 0-5.608l6.28-3.626a4 4 0 0 1 1.855-4.535M19.723 3.5a2 2 0 1 0-3.464 2a2 2 0 0 0 3.464-2M3.071 12.527a2.002 2.002 0 0 0 2.93 1.204a2 2 0 1 0-2.93-1.204m15.92 5.242a2 2 0 1 0-2 3.464a2 2 0 0 0 2-3.464"></svg:path>`,
})
export class TdesignShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
