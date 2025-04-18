import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconSortOutlineIcon],svg[lsicon-sort-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="m4 7l4-4.5L12 7zm8 2H4l4 4.5z"></svg:path>`,
})
export class LsiconSortOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
