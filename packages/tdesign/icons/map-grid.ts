import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMapGridIcon],svg[tdesign-map-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h16V4zm5 2v1h2V6h2v1h2V6h2v1h1v2h-1v2h1v2h-1v2h1v2h-1v1h-2v-1h-2v1h-2v-1H9v1H7v-1H6v-2h1v-2H6v-2h1V9H6V7h1V6zm0 3v2h2V9zm4 0v2h2V9zm2 4h-2v2h2zm-4 2v-2H9v2z"></svg:path>`,
})
export class TdesignMapGridIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
