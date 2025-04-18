import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAppStoreLogoFillIcon],svg[ph-app-store-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M83.66 180.12l-4.8 8a8 8 0 1 1-13.72-8.24l4.8-8a8 8 0 0 1 13.72 8.24M128 152H56a8 8 0 0 1 0-16h35.47l27.2-45.33l-13.53-22.55a8 8 0 0 1 13.72-8.24L128 75.12l9.14-15.24a8 8 0 0 1 13.72 8.24L110.13 136H128a8 8 0 0 1 0 16m72 0h-25.87l16.73 27.88a8 8 0 0 1-13.72 8.24l-38.4-64a8 8 0 0 1 13.72-8.24L164.53 136H200a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhAppStoreLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
