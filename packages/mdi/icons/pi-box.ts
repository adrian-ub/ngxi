import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPiBoxIcon],svg[mdi-pi-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M6 7h11v2h-2v5a1 1 0 0 0 1 1a1 1 0 0 0 1-1h2a3 3 0 0 1-3 3a3 3 0 0 1-3-3V9h-3v8H8V9H6"></svg:path>`,
})
export class MdiPiBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
