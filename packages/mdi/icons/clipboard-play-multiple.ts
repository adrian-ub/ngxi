import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiClipboardPlayMultipleIcon],svg[mdi-clipboard-play-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21h14v2H4c-1.1 0-2-.9-2-2V7h2m18-2v12c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h3.2c.4-1.2 1.5-2 2.8-2s2.4.8 2.8 2H20c1.1 0 2 .9 2 2m-9-1c0 .5.5 1 1 1s1-.5 1-1s-.4-1-1-1s-1 .5-1 1m4 8l-5-4v8"></svg:path>`,
})
export class MdiClipboardPlayMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
