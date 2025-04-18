import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsTriangleUpFilledIcon],svg[pepicons-triangle-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.272 5.205l5 8A1.5 1.5 0 0 1 15 15.5H5a1.5 1.5 0 0 1-1.272-2.295l5-8a1.5 1.5 0 0 1 2.544 0Z"></svg:path>`,
})
export class PepiconsTriangleUpFilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
