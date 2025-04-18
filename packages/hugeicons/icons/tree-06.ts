import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTree06Icon],svg[hugeicons-tree-06-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22V9m-2.998 9.002c-1.657 0-3-1.379-3-3.035a3.5 3.5 0 0 1-.74-6.74a3 3 0 0 1 3.844-4.016a3.001 3.001 0 0 1 5.79.001a3 3 0 0 1 3.844 4.016a3.501 3.501 0 0 1-.738 6.739c0 1.656-1.343 3.035-3 3.035M12 15l2.5-2.5M12 13l-2.5-2.5M10 22h4" color="currentColor"></svg:path>`,
})
export class HugeiconsTree06Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
