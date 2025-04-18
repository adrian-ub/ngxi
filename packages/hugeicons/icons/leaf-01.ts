import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLeaf01Icon],svg[hugeicons-leaf-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7.646 15.71A6 6 0 0 1 7 13c0-3.215 2.5-5.5 6-6c4.082-.583 5.833-2.833 7-4c3.5 13-3 16-7 16a6 6 0 0 1-3-.803"></svg:path><svg:path d="M3 21c.5-3 2.458-4.864 7-6c3.217-.804 5.463-2.82 7-4.945"></svg:path></svg:g>`,
})
export class HugeiconsLeaf01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
