import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignImageSearchFilledIcon],svg[tdesign-image-search-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v20h10.506A6.72 6.72 0 0 1 11 17.75a6.73 6.73 0 0 1 2.189-4.976L9 8.586l-5 5V4h16v7.384c.733.26 1.408.641 2 1.122z"></svg:path><svg:path fill="currentColor" d="M16 5.25a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5m1.654 7.25a5.154 5.154 0 1 0 2.87 9.436l1.975 1.978l1.415-1.413l-1.977-1.98a5.154 5.154 0 0 0-4.283-8.021M14.5 17.654a3.154 3.154 0 1 1 6.308 0a3.154 3.154 0 0 1-6.308 0"></svg:path>`,
})
export class TdesignImageSearchFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
