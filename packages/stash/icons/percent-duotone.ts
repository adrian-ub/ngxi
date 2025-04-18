import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashPercentDuotoneIcon],svg[stash-percent-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 6a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M8 8.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m-.95 8.45a1 1 0 0 1 0-1.414l8.486-8.486a1 1 0 1 1 1.414 1.414L8.464 16.95a1 1 0 0 1-1.414 0M13 15.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0m2.5-.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1"></svg:path>`,
})
export class StashPercentDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
