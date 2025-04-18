import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineChessKnightIcon],svg[streamline-chess-knight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.42 11.256a.97.97 0 0 1 .919-.662h7.322c.417 0 .787.267.92.662l.747 2.244H1.672zm1.152-.662c.158-.83 1.306-1.783 2.117-2.418c1.945-1.522 1.765-2.824 1.447-3.177L5.193 6.11a1.23 1.23 0 0 1-1.437-.154v0a1.23 1.23 0 0 1-.237-1.543L4.983 1.93L4.42.658c.93-.33 3.501-.155 4.518.635c1.27.989 2.894 2.489 1.553 9.3"></svg:path><svg:path d="M7.773 3.971a1.9 1.9 0 0 1-.631 1.03"></svg:path></svg:g>`,
})
export class StreamlineChessKnightIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
