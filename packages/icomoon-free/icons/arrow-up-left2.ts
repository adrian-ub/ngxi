import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeArrowUpLeft2Icon],svg[icomoon-free-arrow-up-left2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.707 12.293L5.414 4H9a1 1 0 0 0 0-2H3a1 1 0 0 0-1 1h-.001v6a1 1 0 0 0 2 0V5.414l8.293 8.293a.997.997 0 0 0 1.414 0a1 1 0 0 0 0-1.414z"></svg:path>`,
})
export class IcomoonFreeArrowUpLeft2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
