import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTypewriterIcon],svg[mdi-typewriter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 13h-4c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2H4l-2 5v2c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-2M6 20c-.89 0-1.34-1.08-.71-1.71S7 18.11 7 19c0 .55-.45 1-1 1m4 0c-.89 0-1.34-1.08-.71-1.71S11 18.11 11 19c0 .55-.45 1-1 1m4 0c-.89 0-1.34-1.08-.71-1.71S15 18.11 15 19c0 .55-.45 1-1 1m4 0c-.89 0-1.34-1.08-.71-1.71S19 18.11 19 19c0 .55-.45 1-1 1m0-10V3H6v7H3v2h18v-2M8 5h8v1H8m0 1h6v1H8"></svg:path>`,
})
export class MdiTypewriterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
