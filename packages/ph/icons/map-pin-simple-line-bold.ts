import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMapPinSimpleLineBoldIcon],svg[ph-map-pin-simple-line-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 204h-76v-65.21a60 60 0 1 0-24 0V204H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24M92 80a36 36 0 1 1 36 36a36 36 0 0 1-36-36"></svg:path>`,
})
export class PhMapPinSimpleLineBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
