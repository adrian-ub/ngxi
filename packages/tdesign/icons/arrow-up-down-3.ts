import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowUpDown3Icon],svg[tdesign-arrow-up-down-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 3.086L12.914 8.5L11.5 9.914l-3-3V15.5h-2V6.914l-3 3L2.086 8.5zm10 5.414v8.586l3-3l1.414 1.414l-5.414 5.414l-5.414-5.414l1.414-1.414l3 3V8.5z"></svg:path>`,
})
export class TdesignArrowUpDown3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
