import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHdmiPortIcon],svg[mdi-hdmi-port-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7H3c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h1l1.4 1.4c.4.4.9.6 1.4.6h10.3c.5 0 1-.2 1.4-.6L20 16h1c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2M3 14V9h18v5h-1.8l-2 2H6.8l-2-2zm16-3H5v2h14z"></svg:path>`,
})
export class MdiHdmiPortIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
