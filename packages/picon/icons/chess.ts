import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconChessIcon],svg[picon-chess-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 3l1 3v2H4V3l1-2l3 2M2 5l1 3H0l1-3l-1-2h1V0h1v3h1M0 2V1h3v1"></svg:path>`,
})
export class PiconChessIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
