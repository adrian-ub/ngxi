import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsClipboardIcon],svg[gridicons-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 18H8v-2h8zm0-6H8v2h8zm2-9h-2v2h2v15H6V5h2V3H6a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-4 2V4a2 2 0 1 0-4 0v1a2 2 0 0 0-2 2v1h8V7a2 2 0 0 0-2-2"></svg:path>`,
})
export class GridiconsClipboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
