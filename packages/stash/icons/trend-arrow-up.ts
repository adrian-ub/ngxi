import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashTrendArrowUpIcon],svg[stash-trend-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.03 5.47a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 0 0 1.06 1.06l1.22-1.22V18a.75.75 0 0 0 1.5 0V7.81l1.22 1.22a.75.75 0 0 0 1.06-1.06zm5.97.78a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5zm-1 3.5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5zm0 3.5a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5zm0 3a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class StashTrendArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
