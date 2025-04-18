import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignWorkOffFilledIcon],svg[tdesign-work-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.004.59L2 .586L.586 2l4.5 4.5H2v15h18.086L22 23.414l1.41-1.41L2 .595zM22 17.766V6.5h-5.5v-4h-9v.766l2 2V4.5h5v2h-3.766z"></svg:path>`,
})
export class TdesignWorkOffFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
