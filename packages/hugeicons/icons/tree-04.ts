import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTree04Icon],svg[hugeicons-tree-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22V9m3 8.197A6 6 0 0 0 18 12a5.98 5.98 0 0 0-1.696-4.18a4.5 4.5 0 1 0-8.607 0A5.98 5.98 0 0 0 6 12c0 2.22 1.207 4.16 3 5.197M12 15l2.5-2.5M12 13l-2.5-2.5M10 22h4" color="currentColor"></svg:path>`,
})
export class HugeiconsTree04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
