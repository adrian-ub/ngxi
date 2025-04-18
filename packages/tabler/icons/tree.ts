import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTreeIcon],svg[tabler-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 13l-2-2m2 1l2-2m-2 11V8m-2.176 8a3 3 0 0 1-2.743-3.69a3 3 0 0 1 .304-4.833A3 3 0 0 1 12 3.77a3 3 0 0 1 4.614 3.707a3 3 0 0 1 .305 4.833A3 3 0 0 1 14 16.005h-4z"></svg:path>`,
})
export class TablerTreeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
