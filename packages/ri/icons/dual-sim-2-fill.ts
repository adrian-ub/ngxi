import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riDualSim2FillIcon],svg[ri-dual-sim-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 2l4.707 4.707a1 1 0 0 1 .293.707V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-3 5.5a3 3 0 0 0-2.995 2.824L9 10.5h2a1 1 0 1 1 1.751.66l-.082.083L9 14.547V16h6v-2h-2.405l1.412-1.27l-.006-.01l.008.008A3 3 0 0 0 12 7.5"></svg:path>`,
})
export class RiDualSim2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
