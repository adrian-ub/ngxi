import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiClipboardPlayMultipleOutlineIcon],svg[mdi-clipboard-play-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7v14h14v2H4c-1.1 0-2-.9-2-2V7zm16-4c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h3.2c.4-1.2 1.5-2 2.8-2s2.4.8 2.8 2zm-6 0c-.6 0-1 .5-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m-4 4V5H8v12h12V5h-2v2m-6 8V9l5 3"></svg:path>`,
})
export class MdiClipboardPlayMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
