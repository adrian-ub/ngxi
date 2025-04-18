import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsMapIcon],svg[humbleicons-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.5 7v9.5m-7 .5V8.5M3.521 6.716l4.553-2.483a1 1 0 0 1 .872-.042l6.108 2.618a1 1 0 0 0 .872-.042l3.595-1.96A1 1 0 0 1 21 5.685v10.721a1 1 0 0 1-.521.878l-4.553 2.483a1 1 0 0 1-.872.042L8.946 17.19a1 1 0 0 0-.872.042l-3.595 1.96A1 1 0 0 1 3 18.315V7.595a1 1 0 0 1 .521-.878z"></svg:path>`,
})
export class HumbleiconsMapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
