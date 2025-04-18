import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTabGroup16RegularIcon],svg[fluent-tab-group-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm.266 8a2 2 0 0 0 1.732 1h6a4 4 0 0 0 4-4V7a2 2 0 0 0-1-1.732V9a3 3 0 0 1-3 3zM4.5 6.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentTabGroup16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
