import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phImagesSquareFillIcon],svg[ph-images-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H80a16 16 0 0 0-16 16v16H48a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-16h16a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M80 48h128v69.38l-16.7-16.7a16 16 0 0 0-22.62 0L93.37 176H80Zm96 160H48V80h16v96a16 16 0 0 0 16 16h96ZM104 88a16 16 0 1 1 16 16a16 16 0 0 1-16-16"></svg:path>`,
})
export class PhImagesSquareFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
