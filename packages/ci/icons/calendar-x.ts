import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciCalendarXIcon],svg[ci-calendar-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 22H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2V2h2v2h6V2h2v2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2ZM5 10v10h14V10H5Zm0-4v2h14V6H5Zm4.706 12.707l-1.413-1.414L10.586 15l-2.293-2.293l1.414-1.414L12 13.586l2.293-2.292l1.414 1.414L13.414 15l2.293 2.293l-1.413 1.413L12 16.414l-2.293 2.293h-.001Z"></svg:path>`,
})
export class CiCalendarXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
