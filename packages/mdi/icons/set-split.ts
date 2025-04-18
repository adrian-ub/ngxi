import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSetSplitIcon],svg[mdi-set-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 7v2h5V7zM2 9v6h5V9zm10 0v2H9v2h3v2l3-3zm5 2v2h5v-2zm0 4v2h5v-2z"></svg:path>`,
})
export class MdiSetSplitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
