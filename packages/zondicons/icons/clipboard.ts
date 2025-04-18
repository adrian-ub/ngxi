import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsClipboardIcon],svg[zondicons-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.03 2.6a3 3 0 0 1 5.94 0L15 3v1h1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h1V3zM5 6H4v12h12V6h-1v1H5zm5-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class ZondiconsClipboardIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
