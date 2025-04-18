import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashListUlDuotoneIcon],svg[stash-list-ul-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m3.5 0a1 1 0 0 0 0 2h10a1 1 0 1 0 0-2zm.1 5a1.1 1.1 0 0 0 0 2.2h9.8a1.1 1.1 0 0 0 0-2.2zm-1.1 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2h-10a1 1 0 0 1-1-1M4 12a1 1 0 1 1 2 0a1 1 0 0 1-2 0m1 4a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class StashListUlDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
