import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashListAddIcon],svg[stash-list-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m3.5 0a1 1 0 0 0 0 2h10a1 1 0 1 0 0-2zm.1 5a1.1 1.1 0 0 0 0 2.2h5.8a1.1 1.1 0 0 0 0-2.2zm-1.1 6a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1M3 12a1 1 0 1 1 2 0a1 1 0 0 1-2 0m1 4a1 1 0 1 0 0 2a1 1 0 0 0 0-2m10.5.55a1 1 0 0 1 1-1h2V13.5a1 1 0 1 1 2 0v2.05h2a1 1 0 1 1 0 2h-2v1.95a1 1 0 1 1-2 0v-1.95h-2a1 1 0 0 1-1-1"></svg:path>`,
})
export class StashListAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
