import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiScrewFlatTopIcon],svg[mdi-screw-flat-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 17v2L12 22l-1.5-3zm1-10.7l-1 .7V6h-3v3l-1 .7v1l5-3.3zm0 4l-1 .7V9l-3 2v2l-1 .7v1l5-3.3zm0 4l-1 .7v-2l-3 2v2l-1 .7v1l5-3.3zM8 2S7 2 7 3l3 2h4l3-2s0-1-1-1z"></svg:path>`,
})
export class MdiScrewFlatTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
