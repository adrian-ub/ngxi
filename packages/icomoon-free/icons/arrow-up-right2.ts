import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeArrowUpRight2Icon],svg[icomoon-free-arrow-up-right2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.707 13.707L12 5.414V9a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1v-.001H7a1 1 0 0 0 0 2h3.586l-8.293 8.293a.997.997 0 0 0 0 1.414a1 1 0 0 0 1.414 0z"></svg:path>`,
})
export class IcomoonFreeArrowUpRight2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
