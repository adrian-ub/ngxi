import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconUrgencyFilledIcon],svg[lsicon-urgency-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.083.739v6.205h3.357l-5.523 8.192V9.61H5.603zM6.5 4H2V3h4.5zm-1 4.5H2v-1h3.5zm1 4.5H2v-1h4.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconUrgencyFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
