import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBookMinusMultipleIcon],svg[mdi-book-minus-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.09 20H5V6H3v14a2 2 0 0 0 2 2h8.81a5.5 5.5 0 0 1-.72-2M19 2h-5v5l-2-1.5L10 7V2H9c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h4.09A6 6 0 0 1 20 13.08c.34.06.68.15 1 .26V4a2 2 0 0 0-2-2m4 16v2h-8v-2z"></svg:path>`,
})
export class MdiBookMinusMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
