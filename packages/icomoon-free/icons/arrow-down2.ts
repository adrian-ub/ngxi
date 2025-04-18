import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeArrowDown2Icon],svg[icomoon-free-arrow-down2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.707 9.707l-5 5a1 1 0 0 1-1.414 0l-5-5a.999.999 0 1 1 1.414-1.414L7 11.586V2a1 1 0 0 1 2 0v9.586l3.293-3.293a.997.997 0 0 1 1.414 0a1 1 0 0 1 0 1.414"></svg:path>`,
})
export class IcomoonFreeArrowDown2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
