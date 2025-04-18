import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconSortAToZOutlineIcon],svg[lsicon-sort-a-to-z-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4.838 1.91v11m2.5-1.792l-2.5 2.293l-2.5-2.293M9 9.5h4.5v.5l-4 3v.5H14H9m.5-6c0-.5.62-2.065.62-2.065m0 0L11 2.5h1l.88 2.935m-2.76 0h2.76m0 0S13.5 7 13.5 7.5"></svg:path>`,
})
export class LsiconSortAToZOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
