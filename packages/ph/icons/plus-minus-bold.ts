import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPlusMinusBoldIcon],svg[ph-plus-minus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m208.49 64.49l-144 144a12 12 0 0 1-17-17l144-144a12 12 0 0 1 17 17M60 112a12 12 0 0 0 24 0V84h28a12 12 0 0 0 0-24H84V32a12 12 0 0 0-24 0v28H32a12 12 0 0 0 0 24h28Zm164 60h-80a12 12 0 0 0 0 24h80a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhPlusMinusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
