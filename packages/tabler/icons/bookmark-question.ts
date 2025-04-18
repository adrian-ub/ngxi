import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBookmarkQuestionIcon],svg[tabler-bookmark-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19l-3-2l-6 4V7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v4m1 11v.01M19 19a2.003 2.003 0 0 0 .914-3.782a1.98 1.98 0 0 0-2.414.483"></svg:path>`,
})
export class TablerBookmarkQuestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
