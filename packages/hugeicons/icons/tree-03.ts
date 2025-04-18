import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTree03Icon],svg[hugeicons-tree-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22V9m3 8.197A6 6 0 0 0 18 12V8A6 6 0 0 0 6 8v4c0 2.22 1.207 4.16 3 5.197M12 15l2.5-2.5M12 13l-2.5-2.5M10 22h4" color="currentColor"></svg:path>`,
})
export class HugeiconsTree03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
