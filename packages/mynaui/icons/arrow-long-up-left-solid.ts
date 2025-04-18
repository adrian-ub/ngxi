import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowLongUpLeftSolidIcon],svg[mynaui-arrow-long-up-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.53 19.53a.75.75 0 0 0 0-1.06L8.905 7.845L11.75 5a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75l2.845-2.845L18.47 19.53a.75.75 0 0 0 1.06 0"></svg:path>`,
})
export class MynauiArrowLongUpLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
