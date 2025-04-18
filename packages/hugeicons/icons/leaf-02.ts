import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLeaf02Icon],svg[hugeicons-leaf-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 21L17 7M6.696 17.304c-2.133-2.132-2.844-5.687 1.421-9.952c5.332-5.331 12.796-4.265 12.796-4.265s1.066 7.464-4.265 12.796c-2.51 2.51-4.775 3.297-6.648 3.084" color="currentColor"></svg:path>`,
})
export class HugeiconsLeaf02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
