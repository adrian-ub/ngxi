import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisGridIcon],svg[uis-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3c-.6 0-1 .4-1 1v4h20V3c0-.6-.4-1-1-1M2 15h9V9H2zm0 6c0 .6.4 1 1 1h8v-5H2zm11-6h9V9h-9zm0 7h8c.6 0 1-.4 1-1v-4h-9z"></svg:path>`,
})
export class UisGridIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
