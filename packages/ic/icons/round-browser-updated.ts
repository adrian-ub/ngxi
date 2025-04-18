import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundBrowserUpdatedIcon],svg[ic-round-browser-updated-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3c.55 0 1 .45 1 1v6h1.59c.89 0 1.34 1.08.71 1.71l-2.59 2.59a.996.996 0 0 1-1.41 0l-2.59-2.59c-.63-.63-.19-1.71.7-1.71H14V4c0-.55.45-1 1-1M6 19.59c0 .78.63 1.41 1.41 1.41h9.17c.78 0 1.41-.63 1.41-1.41c0-.72-.44-1.03-1-1.59h3c1.1 0 2-.9 2-2v-2c0-.55-.45-1-1-1s-1 .45-1 1v2H4V5h7c.55 0 1-.45 1-1s-.45-1-1-1H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3c-.55.55-1 .87-1 1.59"></svg:path>`,
})
export class IcRoundBrowserUpdatedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
