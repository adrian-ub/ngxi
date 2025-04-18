import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFontColorIcon],svg[ri-font-color-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.246 14H8.754l-1.6 4H5l6-15h2l6 15h-2.154zm-.8-2L12 5.885L9.554 12zM3 20h18v2H3z"></svg:path>`,
})
export class RiFontColorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
