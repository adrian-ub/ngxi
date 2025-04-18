import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBookmarkEditIcon],svg[tabler-bookmark-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 17l-6 4V7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v4m.42 4.61a2.1 2.1 0 1 1 2.97 2.97L18 22h-3v-3z"></svg:path>`,
})
export class TablerBookmarkEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
