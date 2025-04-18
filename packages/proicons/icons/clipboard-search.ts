import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsClipboardSearchIcon],svg[proicons-clipboard-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M14.25 21.25h3a3.5 3.5 0 0 0 3.5-3.5V6.25a3.5 3.5 0 0 0-3.5-3.5h-9.5a3.5 3.5 0 0 0-3.5 3.5v4"></svg:path><svg:path d="M8.75 2.75h7.5v2.5a2 2 0 0 1-2 2h-3.5a2 2 0 0 1-2-2z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9.17 19.67a4.054 4.054 0 1 0-5.733-5.733A4.054 4.054 0 0 0 9.17 19.67m0 0l2.58 2.58"></svg:path></svg:g>`,
})
export class ProiconsClipboardSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
