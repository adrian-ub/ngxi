import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsClipboardPasteIcon],svg[proicons-clipboard-paste-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M9.75 21.25h-3a3.5 3.5 0 0 1-3.5-3.5V6.25a3.5 3.5 0 0 1 3.5-3.5h9.5a3.5 3.5 0 0 1 3.5 3.5v2"></svg:path><svg:path d="M7.75 2.75h7.5v2.5a2 2 0 0 1-2 2h-3.5a2 2 0 0 1-2-2z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12.25 13.25a2.5 2.5 0 0 1 2.5-2.5h3.5a2.5 2.5 0 0 1 2.5 2.5v5.5a2.5 2.5 0 0 1-2.5 2.5h-3.5a2.5 2.5 0 0 1-2.5-2.5z"></svg:path></svg:g>`,
})
export class ProiconsClipboardPasteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
