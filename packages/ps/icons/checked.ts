import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psCheckedIcon],svg[ps-checked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m189 395l263-290q13-13 13-30t-13-30l-34-34Q407 0 388 0q-20 0-30 11L189 183l-76-78Q97 85 83 85q-13 0-30 17l-34 37Q6 152 6 169.5T19 198zM83 139l106 106L386 41l34 36l-231 254L49 171z"></svg:path>`,
})
export class PsCheckedIcon {
  readonly viewBox = input("0 0 472 448")
  readonly width = input("1.06em")
  readonly height = input("1em")
}
