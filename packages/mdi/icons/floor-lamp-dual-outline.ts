import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFloorLampDualOutlineIcon],svg[mdi-floor-lamp-dual-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.73 10.06l-1.56 1.18l.83.96V20H8v2h8v-2h-3v-7.7l.85-1.04l-1.58-1.19zM8.32 5.31l.91 2.88l-.23.18L6.47 6.7zM9.39 2L3 6.81l6.08 4.01l2.47-1.89zm6.28 3.3l1.86 1.4L15 8.37l-.23-.17zM14.61 2l-2.17 6.95l2.48 1.87L21 6.81z"></svg:path>`,
})
export class MdiFloorLampDualOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
