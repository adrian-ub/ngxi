import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBookmarkOffIcon],svg[tabler-bookmark-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.708 3.721A4 4 0 0 1 10 3h4a4 4 0 0 1 4 4v7m0 4v3l-6-4l-6 4V7q.001-.463.1-.897M3 3l18 18"></svg:path>`,
})
export class TablerBookmarkOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
