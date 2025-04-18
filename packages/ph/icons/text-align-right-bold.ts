import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextAlignRightBoldIcon],svg[ph-text-align-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 64a12 12 0 0 1 12-12h176a12 12 0 0 1 0 24H40a12 12 0 0 1-12-12m188 28H88a12 12 0 0 0 0 24h128a12 12 0 0 0 0-24m0 40H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24m0 40H88a12 12 0 0 0 0 24h128a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhTextAlignRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
