import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailAllRead16RegularIcon],svg[fluent-mail-all-read-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.24 1.061a.5.5 0 0 0-.48 0L1.7 3.821C1.268 4.058 1 4.51 1 5v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a1.34 1.34 0 0 0-.7-1.178zM2.177 4.7L7 2.07l4.822 2.63q.044.023.078.058L7 7.43L2.1 4.758a.3.3 0 0 1 .078-.058M7.24 8.439L12 5.842V10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5.842L6.76 8.44a.5.5 0 0 0 .48 0M3.268 13A2 2 0 0 0 5 14h6a4 4 0 0 0 4-4V6a2 2 0 0 0-1-1.732V10a3 3 0 0 1-3 3z"></svg:path>`,
})
export class FluentMailAllRead16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
