import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMapPinSimpleBoldIcon],svg[ph-map-pin-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 72a60 60 0 1 0-72 58.79V232a12 12 0 0 0 24 0V130.79A60.09 60.09 0 0 0 188 72m-60 36a36 36 0 1 1 36-36a36 36 0 0 1-36 36"></svg:path>`,
})
export class PhMapPinSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
