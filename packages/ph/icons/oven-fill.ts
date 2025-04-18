import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phOvenFillIcon],svg[ph-oven-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-36 24a12 12 0 1 1-12 12a12 12 0 0 1 12-12m-44 0a12 12 0 1 1-12 12a12 12 0 0 1 12-12m-44 0a12 12 0 1 1-12 12a12 12 0 0 1 12-12m108 136H64v-88h128Z"></svg:path>`,
})
export class PhOvenFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
