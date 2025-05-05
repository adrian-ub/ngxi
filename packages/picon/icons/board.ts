import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBoardIcon],svg[picon-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8V3h4v5M0 8V5h3v3m1-6V0h4v2M0 4V0h3v4"></svg:path>`,
})
export class PiconBoardIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
