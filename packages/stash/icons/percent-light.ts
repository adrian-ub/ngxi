import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashPercentLightIcon],svg[stash-percent-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 6.5a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-1 2a1 1 0 1 1 2 0a1 1 0 0 1-2 0m-.096 8.096a.5.5 0 0 1 0-.707l8.485-8.485a.5.5 0 1 1 .707.707l-8.485 8.485a.5.5 0 0 1-.707 0M13.5 15.5a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class StashPercentLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
