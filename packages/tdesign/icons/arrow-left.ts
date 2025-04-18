import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowLeftIcon],svg[tdesign-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 13H7.914l4.5 4.5L11 18.914L4.086 12L11 5.086L12.414 6.5l-4.5 4.5H19.5z"></svg:path>`,
})
export class TdesignArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
