import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeTabIcon],svg[icomoon-free-tab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 0h1v8h-1zM0 8h1v8H0zm5 3h11v2H5v2.5L1.5 12L5 8.5zm6-6H0V3h11V.5L14.5 4L11 7.5z"></svg:path>`,
})
export class IcomoonFreeTabIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
