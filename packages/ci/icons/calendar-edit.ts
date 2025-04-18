import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciCalendarEditIcon],svg[ci-calendar-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 22H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2V2h2v2h6V2h2v2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2ZM5 10v10h14V10H5Zm0-4v2h14V6H5Zm4.8 13H8v-1.8l4.2-4.19l1.8 1.8L9.8 19Zm4.825-4.818l-1.8-1.8l1.375-1.369l1.8 1.8l-1.37 1.37l-.005-.001Z"></svg:path>`,
})
export class CiCalendarEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
