import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowUpDown1Icon],svg[tdesign-arrow-up-down-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 20.414L11.586 15.5L13 14.086l2.5 2.5V4.5h2v12.086l2.5-2.5l1.414 1.414zm-10-.914V7.414L4 9.914L2.586 8.5L7.5 3.586L12.414 8.5L11 9.914l-2.5-2.5V19.5z"></svg:path>`,
})
export class TdesignArrowUpDown1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
