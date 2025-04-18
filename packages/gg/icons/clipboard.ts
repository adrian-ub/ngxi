import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggClipboardIcon],svg[gg-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 11a1 1 0 1 0 0 2h7.96a1 1 0 1 0 0-2zm.04 4.067a1 1 0 1 0 0 2H16a1 1 0 1 0 0-2z"></svg:path><svg:path fill-rule="evenodd" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm2 2H5v14h14V5h-2v1a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3zm2 0v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgClipboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
