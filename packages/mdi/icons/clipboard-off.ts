import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiClipboardOffIcon],svg[mdi-clipboard-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 5a2 2 0 0 0-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H6.2L21 17.8zm-9 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m10.11 16.46l-1.27 1.27L19.1 21H5a2 2 0 0 1-2-2V4.9L1.11 3l1.28-1.27z"></svg:path>`,
})
export class MdiClipboardOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
