import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiClipboardCheckMultipleIcon],svg[mdi-clipboard-check-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7H2v14c0 1.1.9 2 2 2h14v-2H4M20 3h-3.2c-.4-1.2-1.5-2-2.8-2s-2.4.8-2.8 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-6 0c.6 0 1 .5 1 1s-.5 1-1 1s-1-.5-1-1s.4-1 1-1m-1.7 12.1L9 11.8l1.4-1.4l1.9 1.9L17.6 7L19 8.4"></svg:path>`,
})
export class MdiClipboardCheckMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
