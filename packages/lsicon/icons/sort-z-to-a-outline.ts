import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconSortZToAOutlineIcon],svg[lsicon-sort-z-to-a-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4.838 1.91v11m2.5-1.792l-2.5 2.293l-2.5-2.293M12.4 12l-.9-3H11l-1.2 3m2.6 0s.6 1.5.6 2m-.6-2H9.8M9 14c0-.5.8-2 .8-2m3.7-5h-4v-.5L13 3v-.5H9"></svg:path>`,
})
export class LsiconSortZToAOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
