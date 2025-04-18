import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveArrowUpOutlineIcon],svg[mdi-archive-arrow-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 21H4V10h2v9h12v-9h2zM3 3h18v6H3zm2 2v2h14V5m-8.5 12v-3H8l4-4l4 4h-2.5v3"></svg:path>`,
})
export class MdiArchiveArrowUpOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
