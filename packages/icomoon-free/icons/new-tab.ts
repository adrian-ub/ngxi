import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeNewTabIcon],svg[icomoon-free-new-tab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1v12h12V1zm11 11H4V2h10zM2 14V3.5l-1-1V15h12.5l-1-1z"></svg:path><svg:path fill="currentColor" d="M5.5 4L8 6.5l-3 3L6.5 11l3-3l2.5 2.5V4z"></svg:path>`,
})
export class IcomoonFreeNewTabIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
