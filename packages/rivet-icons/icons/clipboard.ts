import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsClipboardIcon],svg[rivet-icons-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 7h6v2H5zm0 3h6v2H5z"></svg:path><svg:path d="M6 0a2 2 0 0 0-2 2H1v14h14V2h-3a2 2 0 0 0-2-2zM3 4h1v1h8V4h1v10H3zm3-1V2h4v1z"></svg:path></svg:g>`,
})
export class RivetIconsClipboardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
