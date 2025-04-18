import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsCalendarXIcon],svg[bxs-calendar-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2m10.707-4.707l-1.414 1.414L12 16.414l-2.293 2.293l-1.414-1.414L10.586 15l-2.293-2.293l1.414-1.414L12 13.586l2.293-2.293l1.414 1.414L13.414 15zM5 7h14v2H5z"></svg:path>`,
})
export class BxsCalendarXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
