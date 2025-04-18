import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeSmile2Icon],svg[icomoon-free-smile2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3 4a1 1 0 1 1 0 2a1 1 0 0 1 0-2M5 4a1 1 0 1 1 0 2a1 1 0 0 1 0-2m3 9a5 5 0 0 1-4.288-2.427l1.286-.772C5.61 10.819 6.725 11.5 8 11.5s2.389-.681 3.002-1.699l1.286.772A5 5 0 0 1 8 13"></svg:path>`,
})
export class IcomoonFreeSmile2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
