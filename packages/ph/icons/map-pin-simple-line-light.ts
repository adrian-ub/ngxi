import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMapPinSimpleLineLightIcon],svg[ph-map-pin-simple-line-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 210h-82v-76.34a54 54 0 1 0-12 0V210H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12M86 80a42 42 0 1 1 42 42a42 42 0 0 1-42-42"></svg:path>`,
})
export class PhMapPinSimpleLineLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
