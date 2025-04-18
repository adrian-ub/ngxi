import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignStickyNoteIcon],svg[tdesign-sticky-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v12.414L14.414 22H2zm2 2v16h9v-7h7V4zm14.586 11H15v3.586zM6 8h12v2H6zm0 4h5v2H6z"></svg:path>`,
})
export class TdesignStickyNoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
