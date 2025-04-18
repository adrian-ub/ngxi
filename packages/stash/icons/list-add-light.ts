import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashListAddLightIcon],svg[stash-list-add-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 6a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m3 0a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zM6 16.75a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75m-3-5a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0M3.75 16a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m10.75.45a.75.75 0 0 1 .75-.75h2.55v-2.45a.75.75 0 0 1 1.5 0v2.45h2.45a.75.75 0 0 1 0 1.5H19.3v2.55a.75.75 0 0 1-1.5 0V17.2h-2.55a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class StashListAddLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
