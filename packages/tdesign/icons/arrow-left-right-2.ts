import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowLeftRight2Icon],svg[tdesign-arrow-left-right-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.5 17.5h-8.586l3 3l-1.414 1.414L9.086 16.5l5.414-5.414l1.414 1.414l-3 3H21.5zm-6.586-10L9.5 12.914L8.086 11.5l3-3H2.5v-2h8.586l-3-3L9.5 2.086z"></svg:path>`,
})
export class TdesignArrowLeftRight2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
