import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconViewOffOutlineIcon],svg[lsicon-view-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M14.5 5.47S12.447 9.577 8 9.577S1.5 5.471 1.5 5.471m6.464 4.051V13m3.2-4.463l1.508 3.257M4.75 8.781l-1.412 3.013"></svg:path>`,
})
export class LsiconViewOffOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
