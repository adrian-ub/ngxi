import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMouseMoveVerticalIcon],svg[mdi-mouse-move-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6h3l-4-4l-4 4h3v12h-3l4 4l4-4h-3zM9 3.09c2.83.48 5 2.95 5 5.91H9zM14 11v4c0 3.3-2.7 6-6 6s-6-2.7-6-6v-4zM7 9H2c0-2.96 2.17-5.43 5-5.91z"></svg:path>`,
})
export class MdiMouseMoveVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
