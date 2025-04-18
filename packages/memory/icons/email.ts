import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryEmailIcon],svg[memory-email-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 5h1V4h18v1h1v13h-1v1H2v-1H1zm2 12h16V9h-1v1h-2v1h-2v1h-2v1h-2v-1H8v-1H6v-1H4V9H3zM19 6H3v1h2v1h2v1h2v1h4V9h2V8h2V7h2z"></svg:path>`,
})
export class MemoryEmailIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
