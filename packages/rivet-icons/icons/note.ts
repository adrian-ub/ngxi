import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsNoteIcon],svg[rivet-icons-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 8H6V6h4zm0 3H6V9h4z"></svg:path><svg:path d="M10.414 1H2v14h12V4.586zM4 13V3h5.586L12 5.414V13z"></svg:path></svg:g>`,
})
export class RivetIconsNoteIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
