import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phRadicalFillIcon],svg[ph-radical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 80a8 8 0 0 1-16 0v-8h-66.58l-30 75a8 8 0 0 1-14.86 0l-32-80a8 8 0 1 1 14.87-6L88 154.46L112.57 93a8 8 0 0 1 7.43-5h80a8 8 0 0 1 8 8Z"></svg:path>`,
})
export class PhRadicalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
