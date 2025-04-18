import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBookmarkPlusIcon],svg[tabler-bookmark-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 17l-6 4V7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v5m-2 7h6m-3-3v6"></svg:path>`,
})
export class TablerBookmarkPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
