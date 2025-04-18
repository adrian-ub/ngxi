import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riStickyNoteAddFillIcon],svg[ri-sticky-note-add-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1v3H1v2h3v3h2V6h3V4H6V1zm7 4a6 6 0 0 1-8 5.659v9.348c0 .548.447.993.998.993H14v-6c0-.55.45-1 1-1h6V3.999A.996.996 0 0 0 20.007 3h-9.348A6 6 0 0 1 11 5m10 11l-5 4.997V16z"></svg:path>`,
})
export class RiStickyNoteAddFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
