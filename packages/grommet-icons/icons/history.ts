import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsHistoryIcon],svg[grommet-icons-history-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M1 12c0 6.075 4.925 11 11 11s11-4.925 11-11S18.075 1 12 1C7.563 1 4 4 2 7.5M1 1v7h7m8 9l-4-4V6"></svg:path>`,
})
export class GrommetIconsHistoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
