import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowLongDownLeftSolidIcon],svg[mynaui-arrow-long-down-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.53 4.47a.75.75 0 0 1 0 1.06L8.905 16.155L11.75 19a.75.75 0 0 1-.75.75H5a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 .75-.75l2.845 2.845L18.47 4.47a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class MynauiArrowLongDownLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
