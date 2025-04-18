import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMailOpenedFilledIcon],svg[tabler-mail-opened-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.872 14.287l6.522 6.52a3 3 0 0 1-2.218 1.188L19 22H5a3 3 0 0 1-2.394-1.191l6.521-6.522l2.318 1.545l.116.066a1 1 0 0 0 .878 0l.116-.066zM2 9.535l5.429 3.62L2 18.585zm20 0v9.05l-5.43-5.43zm-9.56-7.433l.115.066l8.444 5.629l-8.999 6l-9-6l8.445-5.63a1 1 0 0 1 .994-.065z"></svg:path>`,
})
export class TablerMailOpenedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
