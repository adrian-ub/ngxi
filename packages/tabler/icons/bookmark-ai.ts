import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBookmarkAiIcon],svg[tabler-bookmark-ai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.02 18.32L6 21V7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v4.5M14 21v-4a2 2 0 1 1 4 0v4m-4-2h4m3-4v6"></svg:path>`,
})
export class TablerBookmarkAiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
