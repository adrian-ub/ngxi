import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIceVisionIcon],svg[carbon-ice-vision-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 14v7l1 2l1-2v-7zm-2 0h-4a2 2 0 0 0-2 2v4l1 2l1-2v-4h2v7l1 2l1-2z"></svg:path><svg:path fill="currentColor" d="M4 18A12 12 0 1 0 16 6h-4V1L6 7l6 6V8h4A10 10 0 1 1 6 18Z"></svg:path>`,
})
export class CarbonIceVisionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
