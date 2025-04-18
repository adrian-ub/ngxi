import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSunglassesFillIcon],svg[ph-sunglasses-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 40a8 8 0 0 0 0 16a16 16 0 0 1 16 16v56H40V72a16 16 0 0 1 16-16a8 8 0 0 0 0-16a32 32 0 0 0-32 32v92a44 44 0 0 0 88 0v-20h32v20a44 44 0 0 0 88 0V72a32 32 0 0 0-32-32M91.22 179.22a8 8 0 0 1-11.31 0l-21.57-21.56a8 8 0 0 1 11.32-11.32l21.56 21.57a8 8 0 0 1 0 11.31m120 0a8 8 0 0 1-11.31 0l-21.57-21.56a8 8 0 0 1 11.32-11.32l21.56 21.57a8 8 0 0 1 0 11.31"></svg:path>`,
})
export class PhSunglassesFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
