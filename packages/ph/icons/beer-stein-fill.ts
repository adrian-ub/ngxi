import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBeerSteinFillIcon],svg[ph-beer-stein-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 88h-16V72a40 40 0 0 0-40-40h-11.18c-11.91-10.2-28-16-44.82-16c-35.29 0-64 25.12-64 56v136a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-8h16a24 24 0 0 0 24-24v-64a24 24 0 0 0-24-24m-112 96a8 8 0 0 1-16 0v-80a8 8 0 0 1 16 0Zm48 0a8 8 0 0 1-16 0v-80a8 8 0 0 1 16 0ZM57 64c4.46-18.24 23.85-32 47-32c13.87 0 27.06 5 36.21 13.78a8 8 0 0 0 5.53 2.22H160a24 24 0 0 1 22.62 16Zm167 112a8 8 0 0 1-8 8h-16v-80h16a8 8 0 0 1 8 8Z"></svg:path>`,
})
export class PhBeerSteinFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
