import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPenFilledIcon],svg[tdesign-pen-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.575 9.147L14.769 1.34l-1.832 3.343A7 7 0 0 1 9.216 7.89L4.24 9.721l-1.193 9.816l7.955-7.956l1.414 1.415l-7.954 7.954l9.815-1.194l1.838-5.035a7 7 0 0 1 3.133-3.694z"></svg:path>`,
})
export class TdesignPenFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
