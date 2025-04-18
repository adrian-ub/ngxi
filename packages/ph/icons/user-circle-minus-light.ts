import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phUserCircleMinusLightIcon],svg[ph-user-circle-minus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170 56a6 6 0 0 1 6-6h48a6 6 0 0 1 0 12h-48a6 6 0 0 1-6-6m54.19 38A101.9 101.9 0 1 1 145 27.41a6 6 0 1 1-2 11.83A91.7 91.7 0 0 0 128 38a89.95 89.95 0 0 0-65.51 151.64a77.53 77.53 0 0 1 40-31.38a46 46 0 1 1 51 0a77.53 77.53 0 0 1 40 31.38A90 90 0 0 0 212.88 98a6 6 0 1 1 11.31-4M128 154a34 34 0 1 0-34-34a34 34 0 0 0 34 34m0 64a89.58 89.58 0 0 0 56.56-20a66 66 0 0 0-113.12 0A89.58 89.58 0 0 0 128 218"></svg:path>`,
})
export class PhUserCircleMinusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
