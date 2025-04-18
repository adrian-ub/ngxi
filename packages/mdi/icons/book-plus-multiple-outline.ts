import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBookPlusMultipleOutlineIcon],svg[mdi-book-plus-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.09 20H5V6H3v14a2 2 0 0 0 2 2h8.81a5.5 5.5 0 0 1-.72-2M19 2H9a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4.09a5.5 5.5 0 0 1 .72-2H9V4h2v6l2.5-2.25L16 10V4h3v9a6 6 0 0 1 2 .34V4a2 2 0 0 0-2-2m1 13v3h3v2h-3v3h-2v-3h-3v-2h3v-3Z"></svg:path>`,
})
export class MdiBookPlusMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
