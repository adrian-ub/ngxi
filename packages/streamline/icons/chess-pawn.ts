import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineChessPawnIcon],svg[streamline-chess-pawn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.61 11.35a.93.93 0 0 1 .88-.636h7.02c.399 0 .754.256.88.635l.717 2.151H1.893zm2.069-8.529a2.321 2.321 0 1 0 4.642 0a2.321 2.321 0 1 0-4.642 0"></svg:path><svg:path d="M3.75 10.714c.996-.995 1.658-4.124 1.857-5.571m4.643 5.571C9.254 9.72 8.592 6.59 8.393 5.143m-4.179 0h5.572"></svg:path></svg:g>`,
})
export class StreamlineChessPawnIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
