import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTree01Icon],svg[hugeicons-tree-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22V9m-3 8.419A8.003 8.003 0 0 1 12 2a8 8 0 0 1 3 15.419M12 15l2.5-2.5M12 13l-2.5-2.5M10 22h4" color="currentColor"></svg:path>`,
})
export class HugeiconsTree01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
