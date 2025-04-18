import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBasketballHoopOutlineIcon],svg[mdi-basketball-hoop-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3.57L8 23l2-2l2 2l2-2l2 2l1.43-5H21a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m0 14h-3v-2h-1V9a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v5H6v2H3V4h18zM9 14V9h6v5z"></svg:path>`,
})
export class MdiBasketballHoopOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
