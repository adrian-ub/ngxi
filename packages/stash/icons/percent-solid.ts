import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashPercentSolidIcon],svg[stash-percent-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 6a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M8 8.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m-1.127 8.627a1.25 1.25 0 0 1 0-1.768l8.486-8.486a1.25 1.25 0 0 1 1.768 1.768L8.64 17.127a1.25 1.25 0 0 1-1.768 0M13 15.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0m2.5-.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1"></svg:path>`,
})
export class StashPercentSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
