import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNewspaperClippingThinIcon],svg[ph-newspaper-clipping-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v160a4 4 0 0 0 5.79 3.58L64 204.47l30.21 15.11a4 4 0 0 0 3.58 0L128 204.47l30.21 15.11a4 4 0 0 0 3.58 0L192 204.47l30.21 15.11a4.05 4.05 0 0 0 1.79.42a4 4 0 0 0 4-4V56a12 12 0 0 0-12-12m4 165.53l-26.21-13.11a4 4 0 0 0-3.58 0L160 211.53l-30.21-15.11a4 4 0 0 0-3.58 0L96 211.53l-30.21-15.11a4 4 0 0 0-3.58 0L36 209.53V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4ZM196 112a4 4 0 0 1-4 4h-48a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4m0 32a4 4 0 0 1-4 4h-48a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4m-84-52H64a4 4 0 0 0-4 4v64a4 4 0 0 0 4 4h48a4 4 0 0 0 4-4V96a4 4 0 0 0-4-4m-4 64H68v-56h40Z"></svg:path>`,
})
export class PhNewspaperClippingThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
