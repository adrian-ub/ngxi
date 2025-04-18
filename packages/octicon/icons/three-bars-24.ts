import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconThreeBars24Icon],svg[octicon-three-bars-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 5.25a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5zm0 6a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5zm0 6a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class OcticonThreeBars24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
