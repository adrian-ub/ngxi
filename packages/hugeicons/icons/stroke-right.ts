import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStrokeRightIcon],svg[hugeicons-stroke-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 19H9c-2.828 0-4.243 0-5.121-.879C3 17.243 3 15.828 3 13v-2c0-2.828 0-4.243.879-5.121C4.757 5 6.172 5 9 5h8m3.998 16V3" color="currentColor"></svg:path>`,
})
export class HugeiconsStrokeRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
