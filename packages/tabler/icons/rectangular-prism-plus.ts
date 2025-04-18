import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRectangularPrismPlusIcon],svg[tabler-rectangular-prism-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12.5V8.991a1.98 1.98 0 0 0-1-1.717l-4-2.008a2.02 2.02 0 0 0-2 0L4 10.273c-.619.355-1 1.01-1 1.718v5.018c0 .709.381 1.363 1 1.717l4 2.008a2.02 2.02 0 0 0 2 0l2.062-1.032M9 21v-7.5m0 0L20.5 8m-17 3L9 13.5m7 5.5h6m-3-3v6"></svg:path>`,
})
export class TablerRectangularPrismPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
