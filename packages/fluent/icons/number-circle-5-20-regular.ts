import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNumberCircle520RegularIcon],svg[fluent-number-circle-5-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m-7 8a7 7 0 1 1 14 0a7 7 0 0 1-14 0m5.303-3.554A.5.5 0 0 1 8.8 6H12a.5.5 0 1 1 0 1H9.248l-.19 1.74l.246-.002c.42-.003.95.002 1.221.04a2.875 2.875 0 1 1-2.972 4.132a.5.5 0 0 1 .894-.447a1.875 1.875 0 1 0 1.939-2.694c-.184-.027-.632-.034-1.076-.031a41 41 0 0 0-.733.01l-.047.002h-.016a.5.5 0 0 1-.511-.554z"></svg:path>`,
})
export class FluentNumberCircle520RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
