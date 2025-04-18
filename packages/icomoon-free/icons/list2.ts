import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeList2Icon],svg[icomoon-free-list2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1h10v2H6zm0 6h10v2H6zm0 6h10v2H6zM0 2a2 2 0 1 1 3.999-.001A2 2 0 0 1 0 2m0 6a2 2 0 1 1 3.999-.001A2 2 0 0 1 0 8m0 6a2 2 0 1 1 3.999-.001A2 2 0 0 1 0 14"></svg:path>`,
})
export class IcomoonFreeList2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
