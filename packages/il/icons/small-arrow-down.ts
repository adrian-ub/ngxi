import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilSmallArrowDownIcon],svg[il-small-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M371 148q0 9-7 16L202 326q-7 7-16 7t-17-7L7 164q-7-7-7-17t7-16t16-7t16 7l146 146l146-146q7-7 17-7t16 7q7 9 7 17"></svg:path>`,
})
export class IlSmallArrowDownIcon {
  readonly viewBox = input("0 0 380 700")
  readonly width = input("0.55em")
  readonly height = input("1em")
}
