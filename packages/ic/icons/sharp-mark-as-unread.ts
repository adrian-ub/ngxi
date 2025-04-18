import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpMarkAsUnreadIcon],svg[ic-sharp-mark-as-unread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.23 7h4.12L10.5 2L2 6.21V17h2V7.4L10.5 4z"></svg:path><svg:path fill="currentColor" d="M5 8v13h17V8zm15 4l-6.5 3.33L7 12v-2l6.5 3.33L20 10z"></svg:path>`,
})
export class IcSharpMarkAsUnreadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
