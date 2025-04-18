import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phRainbowFillIcon],svg[ph-rainbow-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 48A120.13 120.13 0 0 0 8 168v16a8 8 0 0 0 8 8h224a8 8 0 0 0 8-8v-16A120.13 120.13 0 0 0 128 48m32 128a8 8 0 0 1-8-8a24 24 0 0 0-48 0a8 8 0 0 1-16 0a40 40 0 0 1 80 0a8 8 0 0 1-8 8m32 0a8 8 0 0 1-8-8a56 56 0 0 0-112 0a8 8 0 0 1-16 0a72 72 0 0 1 144 0a8 8 0 0 1-8 8m32 0a8 8 0 0 1-8-8a88 88 0 0 0-176 0a8 8 0 0 1-16 0a104 104 0 0 1 208 0a8 8 0 0 1-8 8"></svg:path>`,
})
export class PhRainbowFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
