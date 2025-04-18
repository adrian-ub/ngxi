import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeCircleUpIcon],svg[icomoon-free-circle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m14.5 0a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0"></svg:path><svg:path fill="currentColor" d="m11.043 10.457l1.414-1.414L8 4.586L3.543 9.043l1.414 1.414L8 7.414z"></svg:path>`,
})
export class IcomoonFreeCircleUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
