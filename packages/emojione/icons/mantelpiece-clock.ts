import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMantelpieceClockIcon],svg[emojione-mantelpiece-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#594640" d="M60 40c-5 0-9-8-9-13c0-10-9-18-19-18s-19 8-19 18c0 5-4 13-9 13H0v13h64V40z"></svg:path><svg:circle cx="32" cy="28" r="15" fill="#fed0ac"></svg:circle><svg:g fill="#333"><svg:circle cx="32" cy="28" r="2"></svg:circle><svg:path d="M40.1 30c.7 0 2.9-2 2.9-2s-2.2-2-2.9-2c-.6 0-1.1.6-1.3 1.4H31v1.2h7.8c.2.8.7 1.4 1.3 1.4"></svg:path><svg:path d="m32 13.7l-1 14h2z"></svg:path></svg:g><svg:path fill="#d3976e" d="M3 53h8v2H3zm50 0h8v2h-8z"></svg:path>`,
})
export class EmojioneMantelpieceClockIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
