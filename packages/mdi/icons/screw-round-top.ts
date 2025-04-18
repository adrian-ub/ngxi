import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiScrewRoundTopIcon],svg[mdi-screw-round-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 17v2L12 22l-1.5-3zm1-10.7l-1 .7V6h-3v3l-1 .7v1l5-3.3zm0 4l-1 .7V9l-3 2v2l-1 .7v1l5-3.3zm0 4l-1 .7v-2l-3 2v2l-1 .7v1l5-3.3zM7 5h10s-1-3-5-3s-5 3-5 3"></svg:path>`,
})
export class MdiScrewRoundTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
