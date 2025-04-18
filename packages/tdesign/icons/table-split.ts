import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTableSplitIcon],svg[tdesign-table-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v2h7V4zm9 0v2h7V4zm7 4H4v12h16zm-9.002 1.998h2.004v2.004h-2.004zm-6 3h2.004v2.004H4.998zm3 0h2.004v2.004H7.998zm3 0h2.004v2.004h-2.004zm3 0h2.004v2.004h-2.004zm3 0h2.004v2.004h-2.004zm-6 3h2.004v2.004h-2.004z"></svg:path>`,
})
export class TdesignTableSplitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
