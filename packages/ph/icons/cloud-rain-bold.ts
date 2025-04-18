import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCloudRainBoldIcon],svg[ph-cloud-rain-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 12a80.22 80.22 0 0 0-73.61 48.36A57 57 0 0 0 76 60a56 56 0 0 0 0 112h29.58L86 201.34a12 12 0 1 0 20 13.32L134.42 172H156a80 80 0 0 0 0-160m0 136H76a32 32 0 0 1 0-64h.28c-.11 1.1-.2 2.2-.26 3.3a12 12 0 1 0 24 1.39A56.06 56.06 0 1 1 156 148m.65 58.66l-26.67 40a12 12 0 1 1-20-13.32l26.66-40a12 12 0 1 1 20 13.32Z"></svg:path>`,
})
export class PhCloudRainBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
