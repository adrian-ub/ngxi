import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiClipboardTextPlayOutlineIcon],svg[mdi-clipboard-text-play-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3h-4.18C14.25 1.44 12.53.64 11 1.2c-.86.3-1.5.96-1.82 1.8H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10v-2H5V5h2v2h10V5h2v9h2V5a2 2 0 0 0-2-2m-7 2a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1a1 1 0 0 1-1 1m5 11v6l5-3zm0-5H7V9h10zm-2 4H7v-2h8z"></svg:path>`,
})
export class MdiClipboardTextPlayOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
