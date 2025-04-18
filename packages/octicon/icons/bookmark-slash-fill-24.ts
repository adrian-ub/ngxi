import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconBookmarkSlashFill24Icon],svg[octicon-bookmark-slash-fill-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.232 2.175l18.5 15.5a.75.75 0 1 1-.964 1.15L19 17.343v3.907a.75.75 0 0 1-1.218.585L12 17.21l-5.781 4.626A.75.75 0 0 1 5 21.253L4.947 5.569L2.268 3.325a.75.75 0 1 1 .964-1.15M7.421 2h9.829c.966 0 1.75.784 1.75 1.75v8.073a.75.75 0 0 1-1.232.575L6.94 3.325A.75.75 0 0 1 7.421 2"></svg:path>`,
})
export class OcticonBookmarkSlashFill24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
