import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiChessPawnIcon],svg[mdi-chess-pawn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 22H5v-2h14zm-3-4H8l2.18-8H8V8h2.72l.07-.26A2.97 2.97 0 0 1 9.25 6.2c-.67-1.52.02-3.29 1.54-3.95c1.52-.67 3.29.02 3.95 1.54a2.99 2.99 0 0 1-1.54 3.95l.07.26H16v2h-2.18z"></svg:path>`,
})
export class MdiChessPawnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
