import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineTurnSlightLeftIcon],svg[ic-outline-turn-slight-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.66 6V4H6v5.66h2V7.41l5 5V20h2v-7.58c0-.53-.21-1.04-.59-1.41l-5-5h2.25z"></svg:path>`,
})
export class IcOutlineTurnSlightLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
