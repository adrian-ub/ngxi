import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNewStickyNoteIcon],svg[streamline-new-sticky-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9 13.5H1.5a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1V9z"></svg:path><svg:path d="M9 9.5v4L13.5 9h-4a.5.5 0 0 0-.5.5"></svg:path></svg:g>`,
})
export class StreamlineNewStickyNoteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
