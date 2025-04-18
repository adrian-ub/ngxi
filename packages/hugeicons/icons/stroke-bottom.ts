import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStrokeBottomIcon],svg[hugeicons-stroke-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 17V9c0-2.828 0-4.243.879-5.121C6.757 3 8.172 3 11 3h2c2.828 0 4.243 0 5.121.879C19 4.757 19 6.172 19 9v8M3 21h18" color="currentColor"></svg:path>`,
})
export class HugeiconsStrokeBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
