import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsClipboardCopyIcon],svg[majesticons-clipboard-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M10 4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2h-4zm0-2a3.001 3.001 0 0 0-2.83 2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-4h-8.586l1.293 1.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 1 1 1.414 1.414L12.414 13H21V7a3 3 0 0 0-3-3h-1.17A3.001 3.001 0 0 0 14 2h-4z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsClipboardCopyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
