import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPencilCancelIcon],svg[tabler-pencil-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 20h4L18.5 9.5a2.828 2.828 0 1 0-4-4L4 16zm9.5-13.5l4 4M16 19a3 3 0 1 0 6 0a3 3 0 1 0-6 0m1 2l4-4"></svg:path>`,
})
export class TablerPencilCancelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
