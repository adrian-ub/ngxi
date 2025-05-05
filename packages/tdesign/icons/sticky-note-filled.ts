import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignStickyNoteFilledIcon],svg[tdesign-sticky-note-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".9" d="M16.414 22H2V2h20v14.414zm-.914-6.5V20l4.5-4.5zM18 10V8H6v2zm-7 4v-2H6v2z"></svg:path>`,
})
export class TdesignStickyNoteFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
