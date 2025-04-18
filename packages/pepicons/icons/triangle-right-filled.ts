import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsTriangleRightFilledIcon],svg[pepicons-triangle-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.795 11.272l-8 5A1.5 1.5 0 0 1 5.5 15V5a1.5 1.5 0 0 1 2.295-1.272l8 5a1.5 1.5 0 0 1 0 2.544Z"></svg:path>`,
})
export class PepiconsTriangleRightFilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
