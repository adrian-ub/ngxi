import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiScrewMachineFlatTopIcon],svg[mdi-screw-machine-flat-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.5 7.3l-1 .7V7h-3v3l-1 .7v1l5-3.3zm0 4l-1 .7v-2l-3 2v2l-1 .7v1l5-3.3zm0 4l-1 .7v-2l-3 2v2l-1 .7v1l5-3.3zM8 3S7 3 7 4l3 2h4l3-2s0-1-1-1zm5.5 15v3h-3v-1z"></svg:path>`,
})
export class MdiScrewMachineFlatTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
