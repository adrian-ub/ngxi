import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEdgeStyleIcon],svg[hugeicons-edge-style-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 6h18M3 10h7.5m3 0H21M3 14h4m3 0h4m3 0h4M3 18h2.118m3.176 0h2.118m3.176 0h2.118m3.176 0H21" color="currentColor"></svg:path>`,
})
export class HugeiconsEdgeStyleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
