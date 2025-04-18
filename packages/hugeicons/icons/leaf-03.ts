import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLeaf03Icon],svg[hugeicons-leaf-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.675 17.325a7.426 7.426 0 0 1 0-10.502C10.613 2.885 20.459 3.54 20.459 3.54s.656 9.846-3.282 13.784A7.42 7.42 0 0 1 10 19.247M3.5 20.5l12-12" color="currentColor"></svg:path>`,
})
export class HugeiconsLeaf03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
