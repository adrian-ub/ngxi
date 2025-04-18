import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAirplayFillIcon],svg[ph-airplay-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174.15 210.88A8 8 0 0 1 168 224H88a8 8 0 0 1-6.15-13.12l40-48a8 8 0 0 1 12.29 0ZM208 40H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h20.22a4 4 0 0 0 3.07-1.44l38.28-45.92a24 24 0 0 1 21-8.51a24.68 24.68 0 0 1 16.25 8.94l37.91 45.49a4 4 0 0 0 3.07 1.44H208a24 24 0 0 0 24-24V64a24 24 0 0 0-24-24"></svg:path>`,
})
export class PhAirplayFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
