import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTransform3Icon],svg[tdesign-transform-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2.5V6h8.586L20 2.586L21.414 4L18 7.414V16h3.5v2H18v3.5h-2V18H6V8H2.5V6H6V2.5zM8 8v6.586L14.586 8zm8 1.414L9.414 16H16z"></svg:path>`,
})
export class TdesignTransform3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
