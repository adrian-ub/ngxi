import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLabelPercentOutlineIcon],svg[mdi-label-percent-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 17H5V7h11l3.55 5m-1.92-6.16C17.27 5.33 16.67 5 16 5H5c-1.1 0-2 .9-2 2v10a2 2 0 0 0 2 2h11c.67 0 1.27-.34 1.63-.85L22 12zM13.8 8L15 9.2L8.2 16L7 14.8m1.45-6.77c.78 0 1.42.64 1.42 1.42s-.64 1.42-1.42 1.42s-1.42-.64-1.42-1.42s.64-1.42 1.42-1.42m5.1 5.1c.78 0 1.42.64 1.42 1.42s-.64 1.42-1.42 1.42s-1.42-.64-1.42-1.42s.64-1.42 1.42-1.42"></svg:path>`,
})
export class MdiLabelPercentOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
