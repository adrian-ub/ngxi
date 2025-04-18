import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCallSplitIcon],svg[mdi-call-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 4l2.29 2.29l-2.88 2.88l1.42 1.42l2.88-2.88L20 10V4M10 4H4v6l2.29-2.29l4.71 4.7V20h2v-8.41l-5.29-5.3"></svg:path>`,
})
export class MdiCallSplitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
