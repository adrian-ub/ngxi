import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeArrowDownRight2Icon],svg[icomoon-free-arrow-down-right2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.293 3.707L10.586 12H7a1 1 0 0 0 0 2h6a1 1 0 0 0 1-1h.001V7a1 1 0 0 0-2 0v3.586L3.708 2.293a.997.997 0 0 0-1.414 0a1 1 0 0 0 0 1.414z"></svg:path>`,
})
export class IcomoonFreeArrowDownRight2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
