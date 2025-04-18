import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTableSplitFilledIcon],svg[tdesign-table-split-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2v20H2V2zM4 6h7V4H4zm9 0h7V4h-7zm.002 4.75h-2.004v2.004h2.004zm-6 3H4.998v2.004h2.004zm3 0H7.998v2.004h2.004zm3 0h-2.004v2.004h2.004zm3 0h-2.004v2.004h2.004zm3 0h-2.004v2.004h2.004zm-6 3h-2.004v2.004h2.004z"></svg:path>`,
})
export class TdesignTableSplitFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
