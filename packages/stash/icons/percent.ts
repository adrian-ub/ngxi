import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashPercentIcon],svg[stash-percent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 6.25a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M7.75 8.5a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0m-.523 8.273a.75.75 0 0 1 0-1.06l8.485-8.486a.75.75 0 0 1 1.061 1.06l-8.485 8.486a.75.75 0 0 1-1.061 0M13.25 15.5a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0m2.25-.75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5"></svg:path>`,
})
export class StashPercentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
