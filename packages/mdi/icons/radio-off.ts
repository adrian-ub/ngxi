import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRadioOffIcon],svg[mdi-radio-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 4.27l2 2c-.6.34-1 .99-1 1.73v12a2 2 0 0 0 2 2h14.73l2 2L22 22.72L2.28 3zM20 6H8.83l7.64-3.17L15.71 1L6.59 4.76L9.82 8H20v4h-2v-2h-2v2h-2.18L22 20.18V8a2 2 0 0 0-2-2M4 8h.73l4 4H4zm3 6c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3"></svg:path>`,
})
export class MdiRadioOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
