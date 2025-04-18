import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowUpDown2Icon],svg[tdesign-arrow-up-down-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 2.5v8.586l3-3L21.914 9.5L16.5 14.914L11.086 9.5L12.5 8.086l3 3V2.5zm-10 6.586l5.414 5.414l-1.414 1.414l-3-3V21.5h-2v-8.586l-3 3L2.086 14.5z"></svg:path>`,
})
export class TdesignArrowUpDown2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
