import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeArrowDownLeft2Icon],svg[icomoon-free-arrow-down-left2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.293 2.293L4 10.586V7a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1v.001h6a1 1 0 0 0 0-2H5.414l8.293-8.293a.997.997 0 0 0 0-1.414a1 1 0 0 0-1.414 0z"></svg:path>`,
})
export class IcomoonFreeArrowDownLeft2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
