import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiScrewMachineRoundTopIcon],svg[mdi-screw-machine-round-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.5 7.3l-1 .7V7h-3v3l-1 .7v1l5-3.3zm0 4l-1 .7v-2l-3 2v2l-1 .7v1l5-3.3zm0 4l-1 .7v-2l-3 2v2l-1 .7v1l5-3.3zM7 6h10s-1-3-5-3s-5 3-5 3m6.5 12v3h-3v-1z"></svg:path>`,
})
export class MdiScrewMachineRoundTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
