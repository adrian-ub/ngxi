import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStrokeLeftIcon],svg[hugeicons-stroke-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 5h8c2.828 0 4.243 0 5.121.879C21 6.757 21 8.172 21 11v2c0 2.828 0 4.243-.879 5.121C19.243 19 17.828 19 15 19H7M3 3v18" color="currentColor"></svg:path>`,
})
export class HugeiconsStrokeLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
