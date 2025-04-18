import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSetMergeIcon],svg[mdi-set-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7v2h5V7zm10 2v2H9v2h3v2l3-3zm5 0v6h5V9zM2 11v2h5v-2zm0 4v2h5v-2z"></svg:path>`,
})
export class MdiSetMergeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
