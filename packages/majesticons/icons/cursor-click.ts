import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsCursorClickIcon],svg[majesticons-cursor-click-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M8.949 2.684a1 1 0 0 0-1.898.632l1 3a1 1 0 1 0 1.898-.632l-1-3zm6.758 3.023a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 0 0 1.414 1.414l2-2zM3.317 7.051a1 1 0 0 0-.633 1.898l3 1a1 1 0 1 0 .632-1.898l-3-1zm7.025 2.01a1 1 0 0 0-1.282 1.28l4 11a1 1 0 0 0 1.868.03l1.437-3.591l3.928 3.927a1 1 0 1 0 1.414-1.414l-3.928-3.928l3.592-1.436a1 1 0 0 0-.03-1.869l-11-4zm-2.635 4.646a1 1 0 1 0-1.414-1.414l-2 2a1 1 0 1 0 1.414 1.414l2-2z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsCursorClickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
