import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsPrintIcon],svg[gridicons-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 16h6v2H9zm13 1h-3v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2V9a2 2 0 0 1 2-2h1V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2h1a2 2 0 0 1 2 2zM7 7h10V5H7zm10 7H7v6h10zm3-3.5a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 20 10.5"></svg:path>`,
})
export class GridiconsPrintIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
