import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMapPinSimpleLineThinIcon],svg[ph-map-pin-simple-line-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 212h-84v-80.17a52 52 0 1 0-8 0V212H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8M84 80a44 44 0 1 1 44 44a44.05 44.05 0 0 1-44-44"></svg:path>`,
})
export class PhMapPinSimpleLineThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
