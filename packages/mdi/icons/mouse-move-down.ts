import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMouseMoveDownIcon],svg[mdi-mouse-move-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 9H2c0-2.96 2.17-5.43 5-5.91zm13-2h-2v6h-3l4 4l4-4h-3zM9 3.09V9h5c0-2.96-2.17-5.43-5-5.91M2 15c0 3.3 2.7 6 6 6s6-2.7 6-6v-4H2z"></svg:path>`,
})
export class MdiMouseMoveDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
