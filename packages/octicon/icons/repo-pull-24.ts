import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconRepoPull24Icon],svg[octicon-repo-pull-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.875 2.875a2.5 2.5 0 0 1 2.5-2.5h14a.75.75 0 0 1 .75.75v9.125a.75.75 0 0 1-1.5 0V1.875H4.375a1 1 0 0 0-1 1v11.208a2.5 2.5 0 0 1 1-.208h5.937a.75.75 0 1 1 0 1.5H4.375a1 1 0 0 0-1 1v1.75a1 1 0 0 0 1 1h6a.75.75 0 0 1 0 1.5h-6a2.5 2.5 0 0 1-2.5-2.5z"></svg:path><svg:path fill="currentColor" d="M18.643 20.484a.749.749 0 1 0 1.061 1.06l3.757-3.757a.75.75 0 0 0 0-1.06l-3.757-3.757a.75.75 0 0 0-1.061 1.06l2.476 2.477H13a.75.75 0 0 0 0 1.5h8.12z"></svg:path>`,
})
export class OcticonRepoPull24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
