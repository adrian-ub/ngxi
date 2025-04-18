import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileStickyNoteEmptyCommonFileIcon],svg[streamline-interface-file-sticky-note-empty-common-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.5 13.5h-7a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7Z"></svg:path><svg:path d="M8.5 9v4.5l5-5H9a.5.5 0 0 0-.5.5Z"></svg:path></svg:g>`,
})
export class StreamlineInterfaceFileStickyNoteEmptyCommonFileIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
