import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riListViewIcon],svg[ri-list-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm2 1v14h16V5zm2 2h2v2H6zm2 4H6v2h2zm-2 4h2v2H6zm12-8h-8v2h8zm-8 8h8v2h-8zm8-4h-8v2h8z"></svg:path>`,
})
export class RiListViewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
