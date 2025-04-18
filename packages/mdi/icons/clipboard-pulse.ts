import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiClipboardPulseIcon],svg[mdi-clipboard-pulse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-7 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M5 13.46h2.17l3.33-6.38l.94 6.97l2.49-3.19l2.6 2.6H19V15h-3.11l-1.82-1.79l-3.69 4.71l-.76-5.77L8.11 15H5z"></svg:path>`,
})
export class MdiClipboardPulseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
