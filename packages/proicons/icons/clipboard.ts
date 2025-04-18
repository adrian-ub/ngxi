import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsClipboardIcon],svg[proicons-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:rect width="16.5" height="18.5" x="3.75" y="2.75" rx="3.5"></svg:rect><svg:path d="M8.25 2.75h7.5v2.5a2 2 0 0 1-2 2h-3.5a2 2 0 0 1-2-2z"></svg:path></svg:g>`,
})
export class ProiconsClipboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
