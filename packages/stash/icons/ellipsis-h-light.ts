import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashEllipsisHLightIcon],svg[stash-ellipsis-h-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 14a2 2 0 1 1 0-4a2 2 0 0 1 0 4m-1-2a1 1 0 1 0 2 0a1 1 0 0 0-2 0m6.5 2a2 2 0 1 1 0-4a2 2 0 0 1 0 4m-1-2a1 1 0 1 0 2 0a1 1 0 0 0-2 0m5.5 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0m1 2a2 2 0 1 1 0-4a2 2 0 0 1 0 4" clip-rule="evenodd"></svg:path>`,
})
export class StashEllipsisHLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
