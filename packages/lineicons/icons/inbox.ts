import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsInboxIcon],svg[lineicons-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60 26.3c-1.2 0-2.3 1-2.3 2.3v18.8c0 3.9-2.9 7-6.5 7H12.8c-3.7 0-6.5-3.1-6.5-7V28.5c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v18.8c0 6.3 4.9 11.5 11 11.5h38.5c6.1 0 11-5.1 11-11.5V28.5c.1-1.2-1-2.2-2.2-2.2"></svg:path><svg:path fill="currentColor" d="M30.4 41.2c.4.4 1 .7 1.6.7s1.1-.2 1.6-.7l12.2-12.1c.9-.9.9-2.3 0-3.2s-2.3-.9-3.2 0l-8.3 8.2V7.5c0-1.2-1-2.3-2.3-2.3c-1.2 0-2.3 1-2.3 2.3v26.8L21.4 26c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2z"></svg:path>`,
})
export class LineiconsInboxIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
