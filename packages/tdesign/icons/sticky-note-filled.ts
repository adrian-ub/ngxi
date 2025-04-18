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
  template: `<svg:path fill="currentColor" d="M2 2v20h11v-9h9V2zm16 6v2H6V8zm-7 4v2H6v-2z"></svg:path><svg:path fill="currentColor" d="M15 21.414L21.414 15H15z"></svg:path>`,
})
export class TdesignStickyNoteFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
