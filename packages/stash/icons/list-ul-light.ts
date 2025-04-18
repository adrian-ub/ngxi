import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashListUlLightIcon],svg[stash-list-ul-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.75 6a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m3 0a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zM7 16.75a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H7.75a.75.75 0 0 1-.75-.75m-3-5a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0M4.75 16a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5"></svg:path>`,
})
export class StashListUlLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
